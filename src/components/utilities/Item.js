import React from 'react';

function Item(props) {
    return (
        <div className={props.className}>
            <div className='item__heading'>
                <h3 className='item__name'>Soft Uni</h3>
                <h4 className='heading-4'>JS Fundantals</h4>
            </div>
            <div className='item__description'>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className='item__time'>2020 / Sofia, Bulgaria</div>
        </div>
    );
}

export default Item;
