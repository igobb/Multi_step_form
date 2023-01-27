import React from 'react';
import './YourInfo.scss';

function YourInfo({formData, setFormData}) {

    console.log(formData)
    return (
        <div className="page__container">
            <div className="header">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <form className="form__inputs">
                <label form="user-name">
                    <div>
                        Name
                    </div>
                    {formData.name === '' && 
                    <div className='require-info'>
                        This field is required!
                    </div>
                    }
                </label>
                <input 
                    type="text" 
                    name="user-name" 
                    id="user-name" 
                    required 
                    placeholder="e.g. Stephen King" 
                    value={formData.name} 
                    onChange={(event) => setFormData({...formData, name: event.target.value})}
                />
                <label form="user-email">
                    <div>
                        Email
                    </div>
                    {formData.email === '' && 
                    <div className='require-info'>
                        This field is required!
                    </div>
                    }
                </label>
                <input 
                    type="email" //dlaczego typy inputa nie działają i nie robi się automatyczna walidacja formularza?
                    name="user-email" 
                    id="user-email" 
                    required 
                    placeholder="e.g. stephenking@lorem.com" 
                    value={formData.email}
                    onChange={(event) => setFormData({...formData, email: event.target.value})}    
                />
                <label form="user-tel">
                    <div>
                        Phone Number
                    </div>
                    {formData.tel === '' && 
                    <div className='require-info'>
                        This field is required!
                    </div>
                    }
                </label>
                <input 
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    name="user-tel" 
                    id="user-tel" 
                    required 
                    placeholder="e.g. +1 234 567 890" 
                    value={formData.tel}
                    onChange={(event) => setFormData({...formData, tel: event.target.value})}
                />
            </form>
        </div>
    );
}

export default YourInfo;