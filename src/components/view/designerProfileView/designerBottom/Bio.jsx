import React from 'react';

const Bio = (props) => (
  <div className='bio' id={props.id}>
    <h2>Bio</h2>
    <table>
      <tbody>
        {props.bio.reverse().map((bio, index) => {
          return (
            <tr key={index}>
              <td>
                <strong>{bio.workplace}</strong>
              </td>
              {/* <td>{bio.position}</td> */}
              <td>{bio.from}</td>
              <td>{bio.to}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Bio;
