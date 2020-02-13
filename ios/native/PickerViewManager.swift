//
//  PickerViewManager.swift
//  horizontalPicker
//
//  Created by Valentin Blokhin on 12.02.2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

@objc(PickerViewManager)
class PickerViewManager: RCTViewManager {
  override func view() -> UIView! {
    let pickerView = PickerView()
    return pickerView
  }
}
