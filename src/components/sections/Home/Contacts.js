import React from 'react';
import ContactItem from './ContactItem';

import { contacts } from '../../../data/contacts';

const Contacts = () => {
    return (
        <div className='home__personal'>
            <div className='home__responsive'>
                {contacts.map((item) => {
                    return <ContactItem key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Contacts;
