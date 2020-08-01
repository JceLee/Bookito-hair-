import React, { useState } from 'react';
import { Select } from 'antd';

export default function Services(value) {
  const { Option, OptGroup } = Select;
  //   const gender = ['Men', 'Women', 'Kids'];
  //   const genderService = {
  //     Men: ['Cuts', 'Style', 'Perms', 'Colors'],
  //     Women: ['Cuts', 'Style', 'Perms', 'Colors'],
  //     Kids: ['Cuts', 'Style', 'Perms', 'Colors'],
  //   };
  //   const [genders, setGenders] = useState(genderService[gender[0]]);
  //   const [services, setServices] = useState(genderService[gender[0]][0]);

  //   const handleGenderChange = (value) => {
  //     setGenders(genderService[value]);
  //     setServices(genderService[value][0]);
  //   };

  //   const onSetServicesChange = (value) => {
  //     setServices(value);
  //   };

  console.log(`selected ${value}`);

  return (
    // <>
    //   <Select
    //     defaultValue={gender[0]}
    //     style={{ width: 300 }}
    //     onChange={handleGenderChange}
    //   >
    //     {gender.map((gen) => (
    //       <Option key={gen}>{gen}</Option>
    //     ))}
    //   </Select>
    //   <Select
    //     mode='multiple'
    //     placeholder='Select the services...'
    //     style={{ width: 300 }}
    //     // value={services}
    //     onChange={onSetServicesChange}
    //   >
    //     {genders.map((service) => (
    //       <Option key={service}>{service}</Option>
    //     ))}
    //   </Select>
    // </>

    <Select defaultValue='Men' style={{ width: 300 }} onChange={Services}>
      <OptGroup label='Men'>
        <Option value='MenCut'>Cuts</Option>
        <Option value='MenStyle'>Style</Option>
        <Option value='MenPerm'>Perms</Option>
        <Option value='MenColors'>Colors</Option>
      </OptGroup>
      <OptGroup label='Women'>
        <Option value='WomenCut'>Cuts</Option>
        <Option value='WomenStyle'>Style</Option>
        <Option value='WomenPerm'>Perms</Option>
        <Option value='WomenColors'>Colors</Option>
      </OptGroup>
      <OptGroup label='Kids'>
        <Option value='KidsCut'>Cuts</Option>
        <Option value='KidsStyle'>Style</Option>
        <Option value='KidsPerm'>Perms</Option>
        <Option value='KidsColors'>Colors</Option>
      </OptGroup>
    </Select>
  );
}
