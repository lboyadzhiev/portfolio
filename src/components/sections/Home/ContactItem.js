import React from 'react';

const ContactItem = (props) => {
    const { icon, content } = props;
    return (
        <div className='home__details'>
            {icon}
            <h4 className='heading-4 heading-4--light'>{content}</h4>
        </div>
    );
};

export default ContactItem;
