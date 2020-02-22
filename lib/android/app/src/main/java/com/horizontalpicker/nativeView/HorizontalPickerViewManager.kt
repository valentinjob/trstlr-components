package com.horizontalpicker.nativeView

import android.view.ViewGroup
import com.facebook.react.bridge.Arguments
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.events.RCTEventEmitter

class HorizontalPickerViewManager : SimpleViewManager<HorizontalPickerView>() {

    var reactClass = "PickerView"

    var items: Array<String>? = null

    var context: ThemedReactContext? = null

    var pickerView: HorizontalPickerView? = null

    @ReactProp(name = "items")
    fun setItems(view: HorizontalPickerView, newItems: ReadableArray) {
        items = newItems.toArrayList().map { it as String }.toTypedArray()
        view.setItems(items)
    }

    override fun createViewInstance(reactContext: ThemedReactContext): HorizontalPickerView {
            val view = HorizontalPickerView(reactContext, items)
            view.setItems(items)
            view.setOnItemChange(::onItemChange)

            pickerView = view
            context = reactContext

        return pickerView as HorizontalPickerView
    }

    private fun sendEvent(reactContext: ReactContext,
                          eventName: String,
                          params: WritableMap) {

        reactContext.getJSModule(RCTEventEmitter::class.java).receiveEvent(
                pickerView!!.id,
                eventName,
                params)
    }

    fun onItemChange(index: String) {
        val params = Arguments.createMap()
        params.putString("itemIndex", index)
        sendEvent(context!!, "onItemChange", params)
    }

    override fun getName(): String {
        return reactClass
    }

    override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any> {
        return MapBuilder.builder<String, Any>()
                .put(
                        "onItemChange",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onItemChange")))
                .build()
    }
}