package com.horizontalpicker.nativeView

import cn.sherlock.com.sun.media.sound.SF2Soundbank
import cn.sherlock.com.sun.media.sound.SoftSynthesizer
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import jp.kshoji.javax.sound.midi.Receiver
import jp.kshoji.javax.sound.midi.ShortMessage


class MidiPlayerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    var synth: SoftSynthesizer? = null
    var recv: Receiver? = null

    override fun getName(): String {
       return "MidiPlayer"
    }


    @ReactMethod
    fun load(path: String) {
        val file = reactApplicationContext.resources.assets.open(path)
        val sf = SF2Soundbank(file)
        synth = SoftSynthesizer()
        synth?.open()
        synth?.loadAllInstruments(sf)
        synth?.getChannels()?.get(0)?.programChange(0)
        synth?.getChannels()?.get(1)?.programChange(1)
        recv = synth?.receiver
    }

    @ReactMethod
    fun playMidiNote(midi: Int) {
        val msg = ShortMessage()
        msg.setMessage(ShortMessage.NOTE_ON, 0, midi, 127)
        recv?.send(msg, -1)
    }

    @ReactMethod
    fun playMidiNotes(midis:ReadableArray) {
        val msg = ShortMessage()
        val typedMidis = midis.toArrayList().map { it as Double }.toTypedArray()
        for (midi: Double in typedMidis) {
            msg.setMessage(ShortMessage.NOTE_ON, 0, midi.toInt(), 127)
            recv?.send(msg, -1)
        }
    }

    @ReactMethod
    fun stopMidiNote(midi: Int) {
        val msg = ShortMessage()
        msg.setMessage(ShortMessage.NOTE_OFF, 0, midi, 127)
        recv?.send(msg, -1)
    }

    @ReactMethod
    fun stopMidiNotes(midis:ReadableArray) {
        val msg = ShortMessage()
        val typedMidis = midis.toArrayList().map { it as Double }.toTypedArray()
        for (midi: Double in typedMidis) {
            msg.setMessage(ShortMessage.NOTE_OFF, 0, midi.toInt(), 127)
            recv?.send(msg, -1)
        }
    }

}