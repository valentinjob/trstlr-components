package com.horizontalpicker.nativeView

import android.content.Context
import android.graphics.Rect
import android.util.DisplayMetrics
import android.util.TypedValue
import android.view.Gravity
import android.view.View
import android.view.WindowManager
import android.widget.LinearLayout
import androidx.annotation.Px
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.LinearSnapHelper
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.SnapHelper
import com.github.rubensousa.gravitysnaphelper.GravitySnapHelper
import com.horizontalpicker.R



class HorizontalPickerView(context: Context) : LinearLayout(context) {

    private var recyclerView: RecyclerView
    private var viewAdapter: RecyclerView.Adapter<*>
    private var viewManager: RecyclerView.LayoutManager

    private var dataset = Array(50) { i -> i.toString() }

    fun getScreenWidth(context: Context): Int {
        val windowManager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
        val dm = DisplayMetrics()
        windowManager.defaultDisplay.getMetrics(dm)
        return dm.widthPixels
    }

    fun dpToPx(context: Context, value: Int) : Int {
        return TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, value.toFloat(), context.resources.displayMetrics).toInt()
    }

    init {
        inflate(context, R.layout.horizontal_picker, this)
        viewManager = LinearLayoutManager(context)
        viewAdapter = ListAdapter(dataset)

        recyclerView = findViewById<RecyclerView>(R.id.recycler_view).apply {
            // use this setting to improve performance if you know that changes
            // in content do not change the layout size of the RecyclerView
            setHasFixedSize(true)

            // use a linear layout manager
            layoutManager = viewManager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

        }

        val padding: Int = getScreenWidth(context)/ 2 - dpToPx(context, 40)
        recyclerView.setPadding(padding, 0, padding, 0)

        val layoutManager = CenterLayoutManager(context).apply {
            callback = object: CenterLayoutManager.OnItemSelectedListener {
                override fun onItemSelected(layoutPosition: Int) {
                    println(layoutPosition)
                }
            }
        }

        recyclerView.layoutManager = layoutManager

    }
}