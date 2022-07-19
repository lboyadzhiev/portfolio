import React from 'react';

// styles
import classes from './ContactItem.module.scss';
import typography from '../../../styles/typography.scss';

const ContactItem = (props) => {
    const { icon, content } = props;
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.icon}> {icon}</div>
            <h4 className={'heading-4 heading-4--light'}>{content}</h4>
        </div>
    );
};

export default ContactItem;
