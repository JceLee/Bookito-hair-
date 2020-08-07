import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DesignerTop from './DesignerTop/DesignerTop.jsx';
import DesignerBottom from './DesignerBottom/DesignerBottom.jsx';

const designer = {
  fname: 'John',
  lname: 'Doe',
  location: '111 W Georgia St, Vancouver',
  totalRate: 3.7,
  img:
    'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
  activity: {
    numberOfClientsLookingUp: 38,
    avgRespondingTime: 23,
    reputations: ['Great Service', 'Reasonable Price', 'Kindness'],
  },
  bio: [
    {
      workplace: 'Bangtown Hair Salon',
      position: 'Hair designer',
      from: '2017.09',
      to: '2018.09',
    },
    {
      workplace: 'A La Sha Hair Salon',
      position: 'Hair designer',
      from: '2018.10',
      to: '2019.04',
    },
    {
      workplace: 'Juju Hair Lounge',
      position: 'Hair designer',
      from: '2019.04',
      to: 'Present',
    },
  ],
  works: [
    // '/images/designers/designer_works_01.png',
    // '/images/designers/designer_works_02.png',
    // '/images/designers/designer_works_03.png',
    // '/images/designers/designer_works_04.png',
    // '/images/designers/designer_works_05.png',
    // '/images/designers/designer_works_06.png',
    // '/images/designers/designer_works_07.png',
    // '/images/designers/designer_works_08.png',

    {
      src: '/images/designers/designer_works_01.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_02.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_03.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_04.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_05.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_06.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_07.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },
    {
      src: '/images/designers/designer_works_08.png',
      sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
      width: 1,
      height: 1,
    },

    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    // },
    // {
    //   src:
    //     'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg',
    // },
  ],
  serviceNPrices: [
    { service: 'Male Hair cut', price: '$30' },
    { service: 'Female Hair cut', price: '$40' },
    { service: 'Styling', price: '$50' },
    { service: 'Perm', price: '$100' },
    { service: 'Male Hair dying', price: '$30' },
    { service: 'Female Hair dying', price: '$40' },
    { service: 'Styling2', price: '$50' },
  ],
  hours: [
    { day: 'Monday', hour: '10:00 - 22:00' },
    { day: 'Tuesday', hour: '10:00 - 22:00' },
    { day: 'Wednesday', hour: 'Closed' },
    { day: 'Thursday', hour: '10:00 - 22:00' },
    { day: 'Friday', hour: '10:00 - 22:00' },
    { day: 'Saturday', hour: '10:00 - 22:00' },
    { day: 'Sunday', hour: 'Closed' },
  ],
  reviews: [
    {
      customerName: 'customer A',
      photos: [],
      rate: '4.5',
      review:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.07.31',
    },
    {
      customerName: 'customer B',
      photos: ['/images/designers/designer_works_01.png'],
      rate: '3.5',
      review:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.06.11',
    },
    {
      customerName: 'customer C',
      photos: [
        '/images/designers/designer_works_01.png',
        '/images/designers/designer_works_02.png',
      ],
      rate: '5.0',
      review:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.05.21',
    },
    {
      customerName: 'customer D',
      photos: [
        '/images/designers/designer_works_01.png',
        '/images/designers/designer_works_02.png',
        '/images/designers/designer_works_03.png',
      ],
      rate: '4.5',
      review:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.04.11',
    },
    {
      customerName: 'customer E',
      photos: [
        '/images/designers/designer_works_01.png',
        '/images/designers/designer_works_02.png',
        '/images/designers/designer_works_03.png',
        '/images/designers/designer_works_04.png',
      ],
      rate: '5.0',
      review:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.01.22',
    },
  ],
};

const {
  fname,
  lname,
  location,
  totalRate,
  img,
  activity,
  bio,
  works,
  serviceNPrices,
  hours,
  reviews,
} = designer;

const DesignerProfileView = (getProfileById, match) => (
  <BrowserRouter>
    <div className='designerProfileView'>
      <DesignerTop
        fname={fname}
        lname={lname}
        location={location}
        totalRate={totalRate}
        img={img}
      />

      <DesignerBottom
        path={`/designer_profile/${fname.toLowerCase()}_${lname.toLowerCase()}/`}
        fname={fname}
        location={location}
        activity={activity}
        bio={bio}
        works={works}
        serviceNPrices={serviceNPrices}
        hours={hours}
        reviews={reviews}
      />
    </div>
  </BrowserRouter>
);

export default DesignerProfileView;
