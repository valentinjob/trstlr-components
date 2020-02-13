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

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */
  
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
