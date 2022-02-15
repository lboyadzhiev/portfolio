import React from 'react';

const SubSkill = (props) => {
    const { name, img } = props;
    return (
        <div className='item__description'>
            <div className='skills__img'>
                <img src={img} alt='' />
                <span>{name}</span>
            </div>
        </div>
    );
};

export default SubSkill;
