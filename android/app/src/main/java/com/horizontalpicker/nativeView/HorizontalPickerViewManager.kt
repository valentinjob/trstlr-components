package com.horizontalpicker.nativeView

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class HorizontalPickerViewManager : SimpleViewManager<HorizontalPickerView>() {

    var reactClass = "PickerView"

    var selectedTextColor: String? = null
    var items: Array<String>? = null


    @ReactProp(name = "selectedTextColor")
    fun setSelectedTextColor(view: HorizontalPickerView, newColor: String?) {
        selectedTextColor = newColor
    }

    @ReactProp(name = "items")
    fun setItems(view: HorizontalPickerView, newItems: Array<String>?) {
        items = newItems
    }

    override fun createViewInstance(reactContext: ThemedReactContext): HorizontalPickerView {
        val view = HorizontalPickerView(reactContext, items)

        return view
    }

    override fun getName(): String {
        return reactClass
    }

}