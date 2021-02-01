// import React from "react";
//
// export default function Activity(props) {
//   const { id, fname, activity } = props;
//   const { numberOfClientsLookingUp, avgRespondingTime, reputations } = activity;
//   return (
//     <div className="activity" id={id}>
//       <h2>LookUp Activity</h2>
//       <section>
//         <p>
//           <strong>{numberOfClientsLookingUp}</strong> clients have{" "}
//           <strong>LOOKED UP</strong> <span>{fname}</span> so far.
//         </p>
//         <p>
//           <span>{fname}</span> usually responses to your request within{" "}
//           <strong>{avgRespondingTime}</strong> mins.
//         </p>
//         <p>
//           Clients <strong>LOVE</strong> <span>{fname}</span>
//           's
//         </p>
//
//         {reputations.map((reputation, index) => (
//           <div className="reputation" key={index}>
//             {reputation}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
