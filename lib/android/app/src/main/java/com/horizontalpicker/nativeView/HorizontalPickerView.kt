package com.horizontalpicker.nativeView

import android.content.Context
import android.util.DisplayMetrics
import android.util.TypedValue
import android.view.WindowManager
import android.widget.LinearLayout
import androidx.recyclerview.widget.RecyclerView
import com.horizontalpicker.R
import kotlin.reflect.KFunction1


class HorizontalPickerView(context: Context) : LinearLayout(context) {

    private var recyclerView: RecyclerView
    private var viewAdapter: RecyclerView.Adapter<*>

    var layoutManager: CenterLayoutManager? = null

    private var items: Array<String>? = null

    private lateinit var onItemChange: KFunction1<@ParameterName(name = "id") String, Unit>

    constructor(context: Context, newItems: Array<String>?) : this(context) {
        items = newItems
    }

    fun getScreenWidth(context: Context): Int {
        val windowManager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
        val dm = DisplayMetrics()
        windowManager.defaultDisplay.getMetrics(dm)
        return dm.widthPixels
    }

    fun setItems(newItems: Array<String>?) {
        items = newItems

        viewAdapter = ListAdapter(items)
        recyclerView.swapAdapter(viewAdapter, true)
    }

    fun setOnItemChange(callback: KFunction1<@ParameterName(name = "id") String, Unit>) {
        onItemChange = callback
    }

    fun dpToPx(context: Context, value: Int) : Int {
        return TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, value.toFloat(), context.resources.displayMetrics).toInt()
    }

    init {
        inflate(context, R.layout.horizontal_picker, this)
        viewAdapter = ListAdapter(items)

        recyclerView = findViewById<RecyclerView>(R.id.recycler_view).apply {
            // use this setting to improve performance if you know that changes
            // in content do not change the layout size of the RecyclerView
            setHasFixedSize(true)

            // use a linear layout manager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

        }

        val padding: Int = getScreenWidth(context)/ 2 - dpToPx(context, 40)
        recyclerView.setPadding(padding, 0, padding, 0)

        val layoutManager = CenterLayoutManager(context).apply {
            callback = object: CenterLayoutManager.OnItemSelectedListener {
                override fun onItemSelected(layoutPosition: Int) {
                    onItemChange(layoutPosition.toString())
                }
            }
        }

        recyclerView.layoutManager = layoutManager
        this.layoutManager = layoutManager

    }
}