//
//  MidiPlayer.m
//  horizontalPicker
//
//  Created by Valentin Blokhin on 22.03.2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(MidiPlayer, NSObject)

RCT_EXTERN_METHOD(load: (NSString)path
                  resolve: (RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(playMidiNote: (NSInteger)midi)
RCT_EXTERN_METHOD(playMidiNotes: (NSArray)midis)
RCT_EXTERN_METHOD(stopMidiNote: (NSInteger)midi)
RCT_EXTERN_METHOD(stopMidiNotes: (NSArray)midis)

RCT_EXTERN_METHOD(unmute)
@end
