import React from 'react';
import {Container} from 'reactstrap';
import WatchFaceForm from './_WatchFaceForm';
import WatchBandForm from './_WatchBandForm';
import WatchWarrantyForm from './_WarrantyForm';
import PartnershipForm from './_PartnershipForm';

const InputForm = () => {
  return (
    <div style={{maxWidth: 750, margin: '0 auto'}}>
      <Container className='mt-4'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              Omicron
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Watch Info
            </li>
          </ol>
        </nav>
      </Container>
      <WatchFaceForm />
      <WatchBandForm />
      <WatchWarrantyForm />
      <PartnershipForm />
      <Container className='mb-4' />
    </div>
  );
};

export default InputForm;
