import React from 'react';
import { Checkbox } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

const estimatedPrices = [
  { id: 1, service: 'Male Hair cut', price: '$30' },
  { id: 2, service: 'Female Hair cut', price: '$40' },
  { id: 3, service: 'Kids Hair cut', price: '$10' },
  { id: 4, service: 'Male Styling', price: '$30' },
  { id: 5, service: 'Female Styling', price: '$60' },
  { id: 6, service: 'Kids Styling', price: '$20' },
];

export default function EstimatedPrice() {
  // const [checkedItems, setCheckedItems] = useState(estimatedPrices);

  // const handleOnChange = useCallback(
  //   (e) => {
  //     const index = e.target.service;
  //     let items = [...checkedItems];
  //     items[index].isChecked = e.target.checked;
  //     setCheckedItems(items);
  //   },
  //   [checkedItems]
  // );

  // const [isChecked, setIsChecked] = useState(false);

  return (
    // <div>
    //   {checkedItems.map((item, index) => {
    //     console.log('item check', item.isChecked);
    //     return (
    //       <Checkbox
    //         key={index}
    //         name={index}
    //         checked={item.isChecked}
    //         text={item.price}
    //         onChange={handleOnChange}
    //       />
    //     );
    //   })}
    // </div>
    <>
      {/* {estimatedPrices.map((estPrice, index) => (
        <div key={index} className='ePrice'>
          <Checkbox key={estPrice.id}>{estPrice.price}</Checkbox>
        </div>
      ))} */}
    </>
  );
}
