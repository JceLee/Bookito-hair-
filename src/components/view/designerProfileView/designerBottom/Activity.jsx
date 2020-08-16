import React from 'react';

const Activity = (props) => {
  const { fname, activity } = props;

  return (
    <div className='activity'>
      <h2>LookUp Activity</h2>
      <section>
        <p>
          <strong>{numberOfClientsLookingUp}</strong> clients have{' '}
          <strong>LOOKED UP</strong> <span>{fname}</span> so far.
        </p>
        <p>
          <span>{fname}</span> usually responses to your request within{' '}
          <strong>{avgRespondingTime}</strong> mins.
        </p>
        <p>
          Clients <strong>LOVE</strong> <span>{fname}</span>
          's
        </p>

        {reputations.map((reputation, index) => (
          <div className='reputation' key={index}>
            {reputation}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Activity;
