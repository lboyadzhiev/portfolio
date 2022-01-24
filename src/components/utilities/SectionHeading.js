import React from 'react';

const SectionHeading = (props) => {
    return (
        <div className='section-heading'>
            <h2 className='heading-2 heading-2--dark'>{props.name}</h2>
        </div>
    );
};

export default SectionHeading;
