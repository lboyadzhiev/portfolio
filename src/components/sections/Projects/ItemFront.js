import React from 'react';
import { FaGripVertical } from 'react-icons/fa';

const ItemFront = (props) => {
    const { img, name, description } = props;
    return (
        <div className='project'>
            <div className='project__side project__side--front'>
                <img src={img} alt='' className='project__img' />
                <div className='project__heading'>
                    <h2>{name}</h2>
                    <FaGripVertical className='project__icon' />
                </div>
                <p className='project__text'>{description}</p>
            </div>
        </div>
    );
};

export default ItemFront;
