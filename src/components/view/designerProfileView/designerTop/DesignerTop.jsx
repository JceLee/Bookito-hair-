// import React, { useState, useEffect } from 'react';

// import { Affix, Button } from 'antd';
// import DesignerNav from './designerNav/DesignerNav.jsx';
// import ReadOnlyStar from '../../../commonComponents/ReadOnlyStar';

// const DesignerTop = (props) => {
//   const [top] = useState(64);
//   const [height, setHeight] = useState(0);
//   const { isAuthenticated, fname, lname, img, totalRate, location } = props;
//   console.log(height);

//   useEffect(() => {
//     setHeight(document.getElementById('designerTop').clientHeight);
//   }, [height]);

//   return (
//     <Affix offsetTop={top}>
//       <div className='designerTop' id='designerTop'>
//         <img className='profileImage' src={img} alt='profileImage' />
//         <h2>
//           {fname} {lname}
//         </h2>
//         <ReadOnlyStar rating={totalRate} />
//         <p>{location}</p>
//         <div className='tapWithButton'>
//           <DesignerNav
//             height={height}
//           />
//           {isAuthenticated ? (
//             <Button className='Button' type='primary'>
//               Edit Profile
//             </Button>
//           ) : (
//             <Button className='Button' type='primary'>
//               Book Now
//             </Button>
//           )}
//         </div>
//       </div>
//     </Affix>
//   );
// };

// export default DesignerTop;

import React, { useState, useEffect } from 'react';

import { Affix, Button } from 'antd';
import DesignerNav from './designerNav/DesignerNav.jsx';
import ReadOnlyStar from '../../../commonComponents/ReadOnlyStar';

const DesignerTop = (props) => {
  const [top] = useState(64);
  const [height, setHeight] = useState(0);
  const { isAuthenticated, fname, lname, img, totalRate, location } = props;
  console.log(height);

  useEffect(() => {
    setHeight(document.getElementById('tapWithButton').clientHeight);
  }, [height]);

  return (
      <div className='designerTop' id='designerTop'>
        <div className='designerProfile'>
          <img className='profileImage' src={img} alt='profileImage' />
          <h2>
            {fname} {lname}
          </h2>
          <ReadOnlyStar rating={totalRate} />
          <p>{location}</p>
        </div>
        <Affix offsetTop={top}>
          <div className='tapWithButton' id='tapWithButton'>
            <DesignerNav
                height={height}
            />
            {isAuthenticated ? (
                <Button className='Button' type='primary'>
                  Edit Profile
                </Button>
            ) : (
                <Button className='Button' type='primary'>
                  Book Now
                </Button>
            )}
          </div>
        </Affix>
      </div>
  );
};

export default DesignerTop;