import React from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';

import basic from '../../img/Awards/basic.jpeg';

const PreviewBox = (props) => {
    const image = props.image;
    return (
        <div>
            <div className='preview-box'>
                <div className='preview-box__details'>
                    <span className='preview-box__title'>
                        Image <p className='preview-box__p preview-box__current-img'></p>
                        of <p className='preview-box__p  preview-box__total-img'></p>
                    </span>

                    <span>
                        <FaTimes className='preview-box__icon' />
                    </span>
                </div>

                <div className='preview-box__img-box'>
                    <div className='preview-box__slide preview-box__slide--prev'>
                        <FaAngleLeft className='prevBtn' />
                    </div>
                    <div className='preview-box__slide preview-box__slide--next'>
                        <FaAngleRight className='nextBtn' />
                    </div>
                    <img src={basic} alt='' className='preview-box__img' />
                </div>
            </div>
            <div className='shadow'></div>
        </div>
    );
};

export default PreviewBox;
