import React from 'react';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';
const Generator = (props) => {
  const clientName = props.form.clientName;
  const address = props.form.address;
  const unitPrice = props.form.unitPrice;
  const quantity = props.form.quantity;
  const paymentTerm = props.form.paymentTerm;
  const logistic = props.form.logistic;

  return (
    <div>
      <div className='h2 text-center text-primary'>Purchase Agreement</div>
      <p>
        THIS PURCHASE AGREEMENT (the "Agreement") dated{' '}
        {
          <b>
            <Moment format='MMMM, Do, YYYY' />
          </b>
        }
      </p>
      <p>
        BETWEEN: <b>Omicron</b> -AND-{' '}
        <b>
          <span>{clientName} where has a business at</span>{' '}
          <span> {address.streetAddress1}</span>
          <span> {address.streetAddress2}, </span>
          <span> {address.city}</span>
          <span> {address.state}</span>
          <span> {address.zipCode}</span>
        </b>
      </p>
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
      <div className='h5'>Purchase Price</div>
      <ul>
        <b>
          <CurrencyFormat
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType={'text'}
            value={unitPrice * quantity}
          />
        </b>
      </ul>
      <ol start='3'>
        <li>
          The Purchaser will accept the Goods and pay for the Goods based on
          individual future orders to be paid as follows:
          <ul>
            <li>
              <b>{paymentTerm}</b>
            </li>
          </ul>
        </li>
        <li>
          The Seller and the Purchaser both acknowledge the sufficiency of this
          consideration. In addition to the purchase price specified in this
          Agreement, the amount of any present or future sales, use, excise or
          similar tax applicable to the sale of the Goods will be paid by the
          Purchaser, or alternatively, the Purchaser will provide the Seller
          with a tax exemption certificate acceptable to the applicable taxing
          authorities.
        </li>
      </ol>
      <div className='h5'>Delivery of Goods</div>
      <ol start='5'>
        <li>
          The Goods will be{' '}
          <b>
            <span>{logistic}</span>
          </b>
        </li>
        <li>
          Title to the Goods will remain with the Seller until delivery and
          actual receipt of the Goods by the Purchaser or, in the alternative,
          the Seller delivers a document of title or registrable Bill of Sale of
          the Goods, bearing any necessary endorsement, to the Purchaser.
        </li>
        <li>
          The Purchaser's failure to give notice of any claim within 10 days
          from the date of delivery will constitute an unqualified acceptance of
          the Goods and a waiver by the Purchaser of all claims with respect to
          the Goods.
        </li>
      </ol>
      <div className='h5'>Excuse for Delay or Failure to Perform</div>
      <ol start='8'>
        <li>
          The Seller will not be liable in any way for any delay, non-delivery
          or default in shipment due to labor disputes, transportation shortage,
          delays in receipt of material, priorities, fires, accidents and other
          causes beyond the control of the Seller or its suppliers. If the
          Seller, in its sole judgment, will be prevented directly or
          indirectly, on account of any
          cause beyond its control, from delivering the
          Goods at the time specified or within one month after the date of this
          Agreement, then the Seller will have the right to terminate this
          Agreement by notice in writing to the Purchaser, which notice will be
          accompanied by full refund of all sums paid by the Purchaser pursuant
          to this Agreement.
        </li>
      </ol>
      <div className='h5'>Remedies</div>
      <ol start='9'>
        <li>
          The Purchaser's exclusive remedy and the Seller's limit of liability
          for any and all losses or damages resulting from defective goods or
          from any other cause will be for the purchase price of the particular
          delivery with respect to which losses or damages are claimed, plus any
          transportation charges actually paid by the Purchaser.
        </li>
      </ol>
      <div className='h5'>Cancellation</div>
      <ol start='10'>
        <li>The Seller reserves the right to cancel this Agreement:</li>
      </ol>
      <ol type='a'>
        <li>if the Purchaser fails to pay for any shipment when due;</li>
        <li> in the event of the Purchaser;s insolvency or bankruptcy; or</li>
        <li>if the Seller deems that its prospect of payment is impaired.</li>
      </ol>

      <div className='h5'> General Provisions</div>
      <ol start='11'>
        <li>
          All and warranties of the Seller contained in this Agreement will
          survive the closing of this Agreement.
        </li>
        <li>
          The Purchaser may not assign its right or delegate its performance
          under this Agreement without the prior written consent of the Seller,
          and any attempted assignment or delegation without such consent will
          be void. An assignment would change the duty imposed by this
          Agreement, would increase the burden or risk involved and would impair
          the chance of obtaining performance or payment.
        </li>
        <li>
          This Agreement cannot be modified in any way except in writing signed
          by all the parties to this Agreement.ƒ
        </li>
        <li>
          This Agreement will be governed by and construed in accordance with
          the laws of the State of California
        </li>
        <li>
          If any clause of this Agreement is held unconscionable by any court of
          competent jurisdiction, arbitration panel or other official finder of
          fact, the clause will be deleted from this Agreement and the balance
          of this Agreement will remain in full force and effect.
        </li>
        <li>
          This Agreement will inure to the benefit of and be binding upon the
          Seller and the Purchaser and their respective successors and assigns.
        </li>
        <li>
          This Agreement may be executed in counterparts. Facsimile signatures
          are binding and are considered to be original signatures.
        </li>
        <li>Time is of the essence in this Agreement.</li>
        <li>
          This Agreement constitutes the entire agreement between the parties
          and there are no further items or provisions, either oral or
          otherwise. The Purchaser acknowledges that it has not relied upon any
          representations of the Seller as to prospective performance of the
          Goods, but has relied upon its own inspection and investigation of the
          subject matter.
        </li>
      </ol>
      <p>
        IN WITNESS WHEREOF the parties have executed this Purchase Agreement on
        this{' '}
        {
          <b>
            <Moment format='MMMM, Do, YYYY' />
          </b>
        }
      </p>

      <div>Omicron</div>
      <div>per:____________________</div>
      <div>Purchaser</div>
      <div>per:____________________</div>
    </div>
  );
};

export default Generator;
