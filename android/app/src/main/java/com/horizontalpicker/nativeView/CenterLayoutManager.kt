package com.horizontalpicker.nativeView

import android.content.Context
import android.view.View
import android.widget.TextView
import androidx.core.widget.TextViewCompat
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.LinearSnapHelper
import androidx.recyclerview.widget.RecyclerView
import com.horizontalpicker.R


/**
 * Created by nbtk on 5/4/18.
 */
class CenterLayoutManager(context: Context?) : LinearLayoutManager(context) {

    init {
        orientation = HORIZONTAL;
    }

    var callback: OnItemSelectedListener? = null
    var selectedView: TextView? = null
    private lateinit var recyclerView: RecyclerView

    override fun onAttachedToWindow(view: RecyclerView?) {
        super.onAttachedToWindow(view)
        recyclerView = view!!

        // Smart snapping
        val snapHelper = LinearSnapHelper()
        snapHelper.apply {
            attachToRecyclerView(recyclerView)
        }
        recyclerView.smoothScrollToPosition(0)
    }

    override fun onLayoutChildren(recycler: RecyclerView.Recycler?, state: RecyclerView.State) {
        super.onLayoutChildren(recycler, state)
        scaleDownView()
    }

    override fun scrollHorizontallyBy(dx: Int, recycler: RecyclerView.Recycler?, state: RecyclerView.State?): Int {
        if (orientation == LinearLayoutManager.HORIZONTAL) {
            val scrolled = super.scrollHorizontallyBy(dx, recycler, state)
            scaleDownView()
            return scrolled
        } else {
            return 0
        }
    }

    private fun scaleDownView() {
        val mid = width / 2.0f
        for (i in 0 until childCount) {

            // Calculating the distance of the child from the center
            val child = getChildAt(i) as View
            val childMid = (getDecoratedLeft(child) + getDecoratedRight(child)) / 2.0f
            val distanceFromCenter = Math.abs(mid - childMid)

            // The scaling formula
            val scale = 1-Math.sqrt((distanceFromCenter/width).toDouble()).toFloat()*0.66f

            // Set scale to view
            child.scaleX = scale
            child.scaleY = scale
        }
    }

    fun revertTextChanges(textView: TextView) {
        TextViewCompat.setTextAppearance(textView, R.style.normal_child_text)
    }

    override fun onScrollStateChanged(state: Int) {
        super.onScrollStateChanged(state)

        // When scroll stops we notify on the selected item
        if (state.equals(RecyclerView.SCROLL_STATE_IDLE)) {

            // Find the closest child to the recyclerView center --> this is the selected item.
            val recyclerViewCenterX = getRecyclerViewCenterX()
            var minDistance = recyclerView.width
            var position = -1
            var selectedChild: View? = null
            for (i in 0 until recyclerView.childCount) {
                val child = recyclerView.getChildAt(i)


                val childCenterX = getDecoratedLeft(child) + (getDecoratedRight(child) - getDecoratedLeft(child)) / 2
                var newDistance = Math.abs(childCenterX - recyclerViewCenterX)
                if (newDistance < minDistance) {
                    minDistance = newDistance
                    position = recyclerView.getChildLayoutPosition(child)
                    selectedChild = child
                }
            }

            // Notify on item selection
            val textView: TextView? = selectedChild?.findViewById(R.id.text_view_item)
            textView?.apply {
                setTextColor(resources.getColor(R.color.catalyst_redbox_background))
            }
            selectedView = textView
            callback?.onItemSelected(position)
        } else {
            selectedView?.let { revertTextChanges(it) }
            selectedView = null
        }
    }



    private fun getRecyclerViewCenterX() : Int {
        return (recyclerView.right - recyclerView.left)/2 + recyclerView.left
    }

    interface OnItemSelectedListener {
        fun onItemSelected(layoutPosition: Int)
    }
}