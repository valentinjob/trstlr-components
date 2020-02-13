package com.horizontalpicker.nativeView

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class HorizontalPickerViewManager : SimpleViewManager<HorizontalPickerView>() {

    var reactClass = "PickerView"

    override fun createViewInstance(reactContext: ThemedReactContext): HorizontalPickerView {
        val view = HorizontalPickerView(reactContext)

        return view
    }

    override fun getName(): String {
        return reactClass
    }

}