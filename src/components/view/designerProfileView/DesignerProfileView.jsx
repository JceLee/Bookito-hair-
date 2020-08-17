import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BackTop } from 'antd';
import DesignerTop from './designerTop/DesignerTop.jsx';
import DesignerBottom from './designerBottom/DesignerBottom.jsx';

const designer = {
  isAuthenticated: false,
  fname: 'John',
  lname: 'Doe',
  location: 'bcit burnaby, vancouver',
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
    'https://picsum.photos/id/190/300/300',
    'https://picsum.photos/id/290/300/300',
    'https://picsum.photos/id/390/300/300',
    'https://picsum.photos/id/490/300/300',
    'https://picsum.photos/id/590/300/300',
    'https://picsum.photos/id/690/300/300',
    'https://picsum.photos/id/790/300/300',
    'https://picsum.photos/id/890/300/300',
  ],
  serviceNPrices: [
    { service: 'Male Hair cut', price: '$30' },
    { service: 'Female Hair cut', price: '$40' },
    { service: 'Styling', price: '$50' },
    { service: 'Perm', price: '$100' },
    { service: 'Male Hair dying', price: '$30' },
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
      rate: 4.5,
      comment:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.07.31',
    },
    {
      customerName: 'customer B',
      photos: ['https://picsum.photos/id/190/300/300'],
      rate: 3.5,
      comment:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.06.11',
    },
    {
      customerName: 'customer C',
      photos: [
        'https://picsum.photos/id/190/300/300',
        'https://picsum.photos/id/290/300/300',
      ],
      rate: 5.0,
      comment:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.05.21',
    },
    {
      customerName: 'customer D',
      photos: [
        'https://picsum.photos/id/190/300/300',
        'https://picsum.photos/id/290/300/300',
        'https://picsum.photos/id/390/300/300',
      ],
      rate: 4.5,
      comment:
        'Nunc a nibh bibendum, mollis elit vitae, interdum ligula. Mauris dictum rhoncus augue et mollis. Nunc facilisis elit eget massa auctor, sed ultrices quam lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fermentum turpis tellus, et maximus erat maximus at. Maecenas venenatis lacinia libero, et dapibus nisl vulputate at. Cras sodales, velit et rhoncus posuere, lorem urna fringilla est, pellentesque accumsan lectus tortor a tellus. Fusce facilisis mollis arcu, eget molestie lorem cursus ut. Donec semper velit vel dui rhoncus congue feugiat quis nisi. Fusce sit amet quam vel risus gravida pretium.!',
      date: '2020.04.11',
    },
    {
      customerName: 'customer E',
      photos: [
        'https://picsum.photos/id/190/300/300',
        'https://picsum.photos/id/290/300/300',
        'https://picsum.photos/id/390/300/300',
        'https://picsum.photos/id/490/300/300',
        'https://picsum.photos/id/590/300/300',
      ],
      rate: 5.0,
      comment: 'AWESOME!',
      date: '2020.01.22',
    },
  ],
};

const {
  isAuthenticated,
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

const DesignerProfileView = () => (
  <BrowserRouter>
    <div className='designerProfileView'>
      <DesignerTop
        isAuthenticated={isAuthenticated}
        fname={fname}
        lname={lname}
        location={location}
        totalRate={totalRate}
        img={img}
      />

      <DesignerBottom
        fname={fname}
        location={location}
        activity={activity}
        bio={bio}
        works={works}
        serviceNPrices={serviceNPrices}
        hours={hours}
        reviews={reviews}
      />

      <BackTop visibilityHeight={0}>
        <div className='backTopBtn'>Top</div>
      </BackTop>
    </div>
  </BrowserRouter>
);

export default DesignerProfileView;
