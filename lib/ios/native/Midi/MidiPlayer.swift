//
//  MidiPlayer.swift
//  horizontalPicker
//
//  Created by Valentin Blokhin on 22.03.2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import AVFoundation

@objc(MidiPlayer)
class MidiPlayer: NSObject {
    
    var au: AudioUnitMIDISynth!
    
    @objc
    func load(_ path: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        let url = URL(fileURLWithPath: path)
        au = AudioUnitMIDISynth(soundfont: url)
        
        print("Valid URL: \(url)")
        let message = "Prepared Sound Font"
        print(message)
        
        resolve(message)
    }
    
  @objc
    func playMidiNote(_ midi: Int) {
        au.playPitch(midi: midi)
  }
  @objc
    func stopMidiNote(_ midi: Int) {
    au.stopPitch(midi: midi)
  }
    
    
    @objc
      func playMidiNotes(_ midis: [Int]) {
        for midi in midis {
            au.playPitch(midi: midi)
        }
    }
    
    @objc
      func stopMidiNotes(_ midis: [Int]) {
        for midi in midis {
            au.stopPitch(midi: midi)
        }
    }
    
    @objc
    func unmute() {
        do {
            try AVAudioSession.sharedInstance().setCategory(AVAudioSession.Category.playback)
        } catch {
            print(error)
        }
    }
    }
