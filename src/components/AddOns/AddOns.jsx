import React from 'react';
import './AddOns.scss';


function AddOns({formData, setFormData}) {

    console.log(formData)
    return (
        <div className='page__container'>
            <div className='header'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='add-ons__container'>
                <div className='add-ons__items'>
                    <div className='add-ons__item' style={{backgroundColor: formData.onlineService === true && 'var(--magnolia)'}}>
                        <div className='item__info'>
                            <input 
                                type='checkbox' 
                                id='online-service' 
                                checked={formData.onlineService ? 'checked' : ''}  
                                onChange={(event) => event.target.checked ? setFormData({...formData, onlineService: true, onlineServicePrice: 1}) : setFormData({...formData, onlineService: false, onlineServicePrice: 0})}
                            />
                            <div>
                                <h1>Online service</h1>
                                <p>Acces to multiplayer games</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            {formData.choosenBilling === '(Yearly)' ? 
                            <>
                                <p>+${1 * 10}/yr</p>
                            </>: <>
                                <p>+$1/mo</p>
                            </>
                            }
                        </div>
                    </div>
                    <div className='add-ons__item' style={{backgroundColor: formData.largerStorage === true && 'var(--magnolia)'}}>
                        <div className='item__info'>
                            <input 
                                type='checkbox' 
                                id='larger-storage' 
                                checked={formData.largerStorage ? 'checked' : ''} 
                                onChange={(event) => event.target.checked ? setFormData({...formData, largerStorage: true, largerStoragePrice: 2}) : setFormData({...formData, largerStorage: false, largerStoragePrice: 0})} 
                            />
                            <div>
                                <h1>Larger storage</h1>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            {formData.choosenBilling === '(Yearly)' ? 
                            <>
                                <p>+${2 * 10}/yr</p>
                            </>: <>
                                <p>+$2/mo</p>
                            </>
                            }
                        </div>
                    </div>
                    <div className='add-ons__item' style={{backgroundColor: formData.customizableProfile === true && 'var(--magnolia)'}}>
                        <div className='item__info'>
                            <input 
                                type='checkbox' 
                                id='customizable-profile' 
                                checked={formData.customizableProfile ? 'checked' : ''} 
                                onChange={(event) => event.target.checked ? setFormData({...formData, customizableProfile: true, customizableProfilePrice: 2}) : setFormData({...formData, customizableProfile: false, customizableProfilePrice: 0}) }
                            />
                            <div>
                                <h1>Customizable profile</h1>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className='item__price'>
                            {formData.choosenBilling === '(Yearly)' ? 
                            <>
                                <p>+${2 * 10}/yr</p>
                            </>: <>
                                <p>+$2/mo</p>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOns;