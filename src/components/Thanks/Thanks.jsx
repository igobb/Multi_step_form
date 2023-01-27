import React from 'react';
import './Thanks.scss'

import {images} from "../../constans";

function Thanks() {

    return (
        <div className='thanks__container'>
            <div className='thanks__img'>
                <img src={images.thanks} alt='Thank You!' />
            </div>
            <div className='thanks__info'>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    );
}

export default Thanks;