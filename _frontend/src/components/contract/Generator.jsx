import React from 'react';
import Moment from 'react-moment';

const Generator = (props) => {
  return (
    <div>
      <div className='h2 text-center text-primary'>Purchase Agreement</div>
      <p>
        THIS PURCHASE AGREEMENT (the "Agreement") dated{' '}
        {<b><Moment format='MMMM, Do, YYYY' /></b>}
      </p>
      <p>BETWEEN: Omicron -AND- _________________________</p>
      <p>
        IN CONSIDERATION OF THE COVENANTS and agreements contained in this Sales
        Agreement, the parties to this Agreement agree as follows:
      </p>

      <div className='h5'>Sale of Goods </div>
      <ol>
        <li>
          The Seller will sell, transfer and deliver to the Purchaser based on
          individual future orders the following goods (the 'Goods'):
        </li>
        <li>Watch</li>
      </ol>
    </div>
  );
};

export default Generator;
