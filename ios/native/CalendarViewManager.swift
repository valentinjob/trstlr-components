//
//  CalendarManager.swift
//  horizontalPicker
//
//  Created by Valentin Blokhin on 12.02.2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

@objc(CounterViewManager)
class CalendarViewManager: RCTViewManager {
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Swift Counter"
    label.textAlignment = .center
    return label
  }
}
