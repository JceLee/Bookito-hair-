import React from "react";

export default function Bio(props) {
  const { id, bio } = props;
  return (
    <div className="bio" id={id}>
      <h2>Bio</h2>
      <table>
        <tbody>
          {bio.reverse().map((bio, index) => {
            const { workplace, from, to } = bio;
            return (
              <tr key={index}>
                <td>
                  <strong>{workplace}</strong>
                </td>
                <td>{from}</td>
                <td>{to}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
