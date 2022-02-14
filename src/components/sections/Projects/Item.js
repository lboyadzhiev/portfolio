import React from 'react';

import ItemFront from './ItemFront';
import ItemBack from './ItemBack';

const Item = (props) => {
    const { img, name, description } = props;
    return (
        <div>
            <ItemFront img={img} name={name} description={description} />
            <ItemBack name={name} description={description} />
        </div>
    );
};

export default Item;
