import React from "react";
import { Rate } from "antd";

// DEPRECATED: Use StarRate.jsx
export default function ReadOnlyStar(props) {
<<<<<<< HEAD
  const { rate } = props;

  return <Rate disabled allowHalf defaultValue={rate} />;
}
=======
    const { rate } = props;
    
    return (
        <Rate disabled allowHalf defaultValue={rate} style={{fontSize: 15}}/>
    );
}
>>>>>>> Add map drawer for mobile listing view
