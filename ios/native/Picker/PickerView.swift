//
//  PickerView.swift
//  horizontalPicker
//
//  Created by v.blokhin on 2/13/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit

class PickerView: UIView {
  
  var pickerVC: PickerVC
  
  @objc var onItemChange: RCTDirectEventBlock? {
    didSet {
      pickerVC.onItemChange = onItemChange
    }
  }
  
  @objc var items = [String]() {
    didSet {
      pickerVC.pickerData = items
    }
  }
  
  override init(frame: CGRect) {
    self.pickerVC = PickerVC()
    super.init(frame: frame)
    self.addSubview(self.pickerVC.view)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override func reactSetFrame(_ frame: CGRect) {
    super.reactSetFrame(frame)
    self.pickerVC.view.frame = self.bounds
  }
  
}


extension UIColor {
    convenience init(hexString: String) {
        let hex = hexString.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int = UInt64()
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(red: CGFloat(r) / 255, green: CGFloat(g) / 255, blue: CGFloat(b) / 255, alpha: CGFloat(a) / 255)
    }
}
