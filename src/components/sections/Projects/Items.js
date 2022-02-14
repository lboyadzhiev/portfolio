import React from 'react';

import Item from './Item';
import { projects } from '../../../data/projectItems';

const Items = () => {
    return (
        <div className='projects'>
            {projects.map((item) => {
                return <Item key={item.id} {...item} />;
            })}
        </div>
    );
};

export default Items;
