import React, { useState } from 'react';
import { Select } from 'antd';

export default function Services(value) {
  const { Option, OptGroup } = Select;
  const gender = ['Men', 'Women', 'Kids'];
  const genderService = {
    Men: ['Cuts', 'Style', 'Perms', 'Colors'],
    Women: ['Cuts', 'Style', 'Perms', 'Colors'],
    Kids: ['Cuts', 'Style', 'Perms', 'Colors'],
  };
  const [genders, setGenders] = useState(genderService[gender[0]]);
  const [services, setServices] = useState(genderService[gender[0]][0]);

  const handleGenderChange = (value) => {
    setGenders(genderService[value]);
    setServices(genderService[value][0]);
  };

  const onSetServicesChange = (value) => {
    setServices(value);
  };

  console.log(`selected ${value}`);

  return (
    <>
      <Select
        defaultValue={gender[0]}
        style={{ width: 300 }}
        onChange={handleGenderChange}
      >
        {gender.map((gen) => (
          <Option key={gen}>{gen}</Option>
        ))}
      </Select>
      <Select
        mode='multiple'
        placeholder='Select the services...'
        style={{ width: 300, marginTop: 10 }}
        // value={services}
        onChange={onSetServicesChange}
      >
        {genders.map((service) => (
          <Option key={service}>{service}</Option>
        ))}
      </Select>
    </>

    // <Select defaultValue='Men' style={{ width: 300 }} onChange={Services}>
    //   <OptGroup label='Men'>
    //     <Option value='MenCut'>Cuts</Option>
    //     <Option value='MenStyle'>Style</Option>
    //     <Option value='MenPerm'>Perms</Option>
    //     <Option value='MenColors'>Colors</Option>
    //     <Option value='MenCutStyle'>Cut + Style</Option>
    //     <Option value='MenCutPerm'>Cut + Perm</Option>
    //     <Option value='MenCutColors'>Cut + Color</Option>
    //   </OptGroup>
    //   <OptGroup label='Women'>
    //     <Option value='WomenCut'>Cuts</Option>
    //     <Option value='WomenStyle'>Style</Option>
    //     <Option value='WomenPerm'>Perms</Option>
    //     <Option value='WomenColors'>Colors</Option>
    //     <Option value='WomenCutStyle'>Cut + Style</Option>
    //     <Option value='WomenCutPerm'>Cut + Perm</Option>
    //     <Option value='WomenCutColors'>Cut + Color</Option>
    //   </OptGroup>
    //   <OptGroup label='Kids'>
    //     <Option value='KidsCut'>Cuts</Option>
    //     <Option value='KidsStyle'>Style</Option>
    //     <Option value='KidsPerm'>Perms</Option>
    //     <Option value='KidsColors'>Colors</Option>
    //     <Option value='KidsCutStyle'>Cut + Style</Option>
    //     <Option value='KidsCutPerm'>Cut + Perm</Option>
    //     <Option value='KidsCutColors'>Cut + Color</Option>
    //   </OptGroup>
    // </Select>
  );
}
