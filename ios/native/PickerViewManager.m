//
//  PickerViewManager.m
//  horizontalPicker
//
//  Created by v.blokhin on 2/13/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(PickerViewManager, RCTViewManager)


RCT_EXPORT_VIEW_PROPERTY(items, NSArray *)
RCT_EXPORT_VIEW_PROPERTY(onItemChange, RCTDirectEventBlock)

@end
