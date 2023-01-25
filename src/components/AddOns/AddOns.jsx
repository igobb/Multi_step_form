import React, { useState } from 'react';
import './AddOns.scss';


function AddOns(props) {

    return (
        <div className='page__container'>
            <div className='header'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='add-ons__container'>
                <div className='add-ons__items'>
                    <div className='add-ons__item'>
                        <div className='item__info'>
                            <input type='checkbox' id='online-service'/>
                            <div>
                                <h1>Online service</h1>
                                <p>Acces to multiplayer games</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            <p>+1$/mo</p>
                        </div>
                    </div>
                    <div className='add-ons__item'>
                        <div className='item__info'>
                            <input type='checkbox' id='larger-storage'/>
                            <div>
                                <h1>Larger storage</h1>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            <p>+$2/mo</p>
                        </div>
                    </div>
                    <div className='add-ons__item'>
                        <div className='item__info'>
                            <input type='checkbox' id='customizable-profile'/>
                            <div>
                                <h1>Customizable profile</h1>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            <p>+$2/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOns;