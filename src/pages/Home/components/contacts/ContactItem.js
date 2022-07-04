import React from 'react';

// styles
import classes from './ContactItem.module.scss';
import typography from '../../../../styles/typography.scss';

const ContactItem = (props) => {
    const { icon, content } = props;
    return (
        <div className={classes.mainWrapper}>
            {icon}
            <h4 className={typography[`heading-1`]}>{content}</h4>
        </div>
    );
};

export default ContactItem;
