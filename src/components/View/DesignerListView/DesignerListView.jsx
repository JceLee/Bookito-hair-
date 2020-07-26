import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Designer from './Designer';

import firebase from '../../../config/fbConfig';
import { Divider } from 'antd';

// getDesignerList();

const DesignerListView = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    getDesignerListTEMP();
  }, []);

  const getDesignerListTEMP = () => {
    firebase.db
      .collection('designers')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDesigners((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  if (designers.length === 0) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className='DesignerListView'>
        <h1>{designers.length} Hair designers in Vancouver.</h1>
        <Divider />
        {designers.map((designer) => {
          return (
            <>
              <Designer
                name={designer.name}
                gender={designer.gender}
                rate={designer.rate}
                Location={designer.Location}
                img={designer.img}
                service={designer.service}
              />
              <Divider />
            </>
          );
        })}
      </div>
    </BrowserRouter>
  );
};

export default DesignerListView;
