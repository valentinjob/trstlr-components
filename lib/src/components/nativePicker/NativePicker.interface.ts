export interface PickerViewProps {
  containerStyle: object;
  items: string[];
  onItemChange: (string: string) => void;
}
