//
//  PickerVC.swift
//  horizontalPicker
//
//  Created by v.blokhin on 2/13/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit

class PickerVC: UIViewController {
  
  @IBOutlet weak var img: UIImageView!
  @IBOutlet weak var label: UILabel!
  @IBOutlet weak var picker: UIPickerView!
  
  let pickerData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
  
  let rotationAngle = -90 * (CGFloat.pi / 180)
  
  var elementWidth = CGFloat(90.0)
  let elementHeight = CGFloat(50.0)
  
  private let pickerSelectionIndicatorHeight: CGFloat = 62.0

  
    override func viewDidLoad() {
        super.viewDidLoad()
      img.backgroundColor = UIColor.black
      label.text = "test"
      picker.dataSource = self
      picker.delegate = self
      
      let x = picker.frame.origin.x
      let y = picker.frame.origin.y
      picker.showsSelectionIndicator = false
      
      picker.transform = CGAffineTransform(rotationAngle: rotationAngle)
      picker.frame = CGRect(x: x - 150, y: y, width: picker.frame.width + 500, height: 100)

    }


    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

extension PickerVC: UIPickerViewDelegate, UIPickerViewDataSource {

  
  func numberOfComponents(in pickerView: UIPickerView) -> Int {
    return 1
  }
  
  
  func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    return pickerData.count
  }
  
  func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
    print(component)
  }
  
  func pickerView(_ pickerView: UIPickerView, viewForRow row: Int, forComponent component: Int, reusing view: UIView?) -> UIView {
    pickerView.subviews[1].isHidden = true
    pickerView.subviews[2].isHidden = true
    let label = UILabel(frame: CGRect(x: 0, y: 0, width: 80, height: 80))
    label.text = pickerData[component]
    label.font = UIFont(name: "Helvetica", size: 18)
    label.font = UIFont.systemFont(ofSize: 18, weight: .bold)
    label.minimumScaleFactor = 0.5
    label.textAlignment = .center
    label.transform = CGAffineTransform(rotationAngle: rotationAngle * -1)
    
    let view = buildSelectionFrame(pickerView)
    pickerView.addSubview(view)
    return label
  }
  
  func buildSelectionFrame(_ pickerView: UIPickerView) -> UIView {
    let view = UIView(frame: CGRect(x: elementWidth / 3.5, y: pickerView.subviews[1].frame.origin.y, width: elementHeight, height: elementWidth))
       view.layer.borderColor = UIColor.blue.cgColor
    view.layer.borderWidth = 1
       view.layer.cornerRadius = 5.0
    return view
  }
  
  func pickerView(_ pickerView: UIPickerView, widthForComponent component: Int) -> CGFloat {
    return elementHeight
  }
  
  func pickerView(_ pickerView: UIPickerView, rowHeightForComponent component: Int) -> CGFloat {
    return elementWidth
  }
  
}
