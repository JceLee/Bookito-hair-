import React, { useState } from 'react';
import { Select, Input, AutoComplete } from 'antd';

export default function Services(value) {
  // const renderTitle = (title) => <span>{title}</span>;

  // const renderItem = (title, count) => ({
  //   value: title,
  //   label: (
  //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //       {title}
  //       <span>{count}</span>
  //     </div>
  //   ),
  // });

  const renderItem = (title, count) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {title}
      <span>{count}</span>
    </div>
  );

  // const options = [
  //   {
  //     label: renderTitle('Men'),
  //     options: [
  //       renderItem('Cuts', 20),
  //       renderItem('Style', 30),
  //       renderItem('Perms', 40),
  //       renderItem('Colors', 50),
  //     ],
  //   },
  //   {
  //     label: renderTitle('Women'),
  //     options: [
  //       renderItem('Cuts', 60),
  //       renderItem('Style', 70),
  //       renderItem('Perms', 80),
  //       renderItem('Colors', 90),
  //     ],
  //   },
  //   {
  //     label: renderTitle('Kids'),
  //     options: [
  //       renderItem('Cuts', 5),
  //       renderItem('Style', 10),
  //       renderItem('Perms', 15),
  //       renderItem('Colors', 15),
  //     ],
  //   },
  // ];

  // const Complete = () => (
  //   <AutoComplete
  //     dropdownClassName='dropdown'
  //     dropdownMatchSelectWidth={500}
  //     style={{ width: 250 }}
  //     options={options}
  //   >
  //     <Input.Search size='middle' placeholder='Choose services...' />
  //   </AutoComplete>
  // );

  const { Option, OptGroup } = Select;
  const gender = ['Men', 'Women', 'Kids'];
  const genderService = {
    Men: [renderItem('Cuts', 20), ('Style', 30), ('Perms', 40), ('Colors', 50)],
    Women: [renderItem('Cuts', 60), 'Style', 'Perms', 'Colors'],
    Kids: [renderItem('Cuts', 5), 'Style', 'Perms', 'Colors'],
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
      <div className='service'>
        <Select
          defaultValue={gender[0]}
          style={{ width: 200 }}
          onChange={handleGenderChange}
        >
          {gender.map((gen) => (
            <Option key={gen}>{gen}</Option>
          ))}
        </Select>
        <br />
        <Select
          mode='multiple'
          placeholder='Select the services...'
          style={{
            width: 200,
            marginTop: 10,
          }}
          // value={services}
          onChange={onSetServicesChange}
        >
          {genders.map((service) => (
            <Option key={service}>{service}</Option>
          ))}
        </Select>
      </div>
    </>

    // <>
    //   <AutoComplete
    //     dropdownClassName='dropdown'
    //     dropdownMatchSelectWidth={250}
    //     style={{ width: 250 }}
    //     options={options}
    //   >
    //     <Input.Search size='middle' placeholder='Choose services...' />
    //   </AutoComplete>
    // </>

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
