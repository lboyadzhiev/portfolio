import React from 'react';

import Item from '../../utilities/Item';
import { educations } from '../../../data/education';

const Items = () => {
    return (
        <div className='education'>
            {educations.map((item) => {
                return <Item className='education__item' key={item.id} {...item} />;
            })}
        </div>
    );
};

export default Items;
