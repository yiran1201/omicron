import React from 'react';
import {Container} from 'reactstrap';
import WatchFaceForm from './_WatchFaceForm';
import WatchBandForm from './_WatchBandForm';
import WatchWarrantyForm from './_WarrantyForm';
import ClientInfoForm from './_ClientInfoForm';
import PartnershipForm from './_PartnershipForm';

const InputForm = () => {
  return (
    <>
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
      <ClientInfoForm />
      <PartnershipForm />
      <Container className='mb-4' />
    </>
  );
};

export default InputForm;
