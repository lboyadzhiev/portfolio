import React from 'react';

import Card from './Card';
function Item(props) {
    const { name, subject, desc, date } = props;
    return (
        <Card className={props.className}>
            <div className='item__heading'>
                <h3 className='item__name'>{name}</h3>
                <h4 className='heading-4'>{subject}</h4>
            </div>
            <div className='item__description'>
                <ListItem />;
            </div>
            <div className='item__time'>{date}</div>
        </Card>
    );
}

export default Item;

const ListItem = () => {
    return <li></li>;
};
