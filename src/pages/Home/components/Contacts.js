import React from 'react';

// styles
import classes from './Contacts.module.scss';

// components
import ContactItem from './ContactItem';

// data

import { contacts } from '../../../data/contacts';

const Contacts = () => {
    return (
        <div className={classes.mainWrapper}>
            <div>
                {contacts.map((item) => {
                    return <ContactItem key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Contacts;
