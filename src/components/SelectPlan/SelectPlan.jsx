import React, {useState} from 'react';
import './SelectPlan.scss';
import {images} from "../../constans";

function SelectPlan({formData, setFormData}) {

    const [isActive, setIsActive] = useState('');
    const [yearlyBilling, setYearlyBilling] = useState('monthly');
    
    const handleSwitch = () => {
        yearlyBilling !== 'monthly' ? setYearlyBilling('monthly') : setYearlyBilling('yearly');
    }

    console.log(formData)
    return (
        <div className="page__container">
            <div className="header">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plan-options__container">
                <div className="plan-options__items">
                    <div 
                        className="plan-options__item" 
                        onClick={()  => {setIsActive('elementArcade'); setFormData({...formData, choosenPlan: 'Arcade', pricePlan: 9})}} 
                        style={{backgroundColor: isActive === 'elementArcade' || formData.choosenPlan === 'Arcade' ? 'var(--magnolia)' : ''}}
                    >
                        <div className='item__img'>
                            <img src={images.arcade} alt=''/>
                        </div>
                        <div className="item__info">
                            <h1>Arcade</h1>
                                {yearlyBilling === 'monthly' && formData.choosenBilling === '(Monthly)' ? <p>$9/mo</p> : 
                                <>
                                    <p>$90/yr</p>
                                    <p className='p__yearly-billings'>2 months free</p>
                                </>}
                       </div>
                    </div>
                    <div 
                        className="plan-options__item" 
                        onClick={() => {setIsActive('elementAdvanced'); setFormData({...formData, choosenPlan: 'Advance', pricePlan: 12})}} 
                        style={{backgroundColor: isActive === 'elementAdvanced' || formData.choosenPlan === 'Advance'  ? 'var(--magnolia)' : ''}}
                    >
                        <div className='item__img'>
                            <img src={images.advanced} alt='' />
                        </div>
                        <div className="item__info">
                            <h1>Advanced</h1>
                                {yearlyBilling === 'monthly' && formData.choosenBilling === '(Monthly)' ? <p>$12/mo</p> : 
                                <>
                                    <p>120/yr</p>
                                    <p className='p__yearly-billings'>2 months free</p>
                                </>}
                        </div>
                    </div>
                    <div 
                        className="plan-options__item" 
                        onClick={() => {setIsActive('elementPro'); setFormData({...formData, choosenPlan: 'Pro', pricePlan: 15})}} 
                        style={{backgroundColor: isActive === 'elementPro' || formData.choosenPlan === 'Pro'  ? 'var(--magnolia)' : ''}}
                    >
                        <div className='item__img'>
                            <img src={images.pro} alt='' />
                        </div>
                        <div className="item__info">
                            <h1>Pro</h1>
                                {yearlyBilling === 'monthly' && formData.choosenBilling === '(Monthly)' ? 
                                <p>$15/mo</p> : 
                                <>
                                    <p>$150/yr</p>
                                    <p className='p__yearly-billings'>2 months free</p>
                                </>}
                        </div>
                    </div>
                </div>
                <div className='plan-options__switcher'>
                        <h1 style={{color: yearlyBilling !== 'monthly' && 'var(--light-gray)'}}>Monthly</h1>
                        <label>
                            <input 
                                type="checkbox" 
                                id="billingCheckbox" 
                                onChange={() => {yearlyBilling === 'monthly' ? setFormData({...formData, choosenBilling: '(Yearly)'}) : setFormData({...formData, choosenBilling: '(Monthly)'}); handleSwitch()}}
                                checked={formData.choosenBilling === '(Yearly)' ? 'checked' : ''} //przechodząć na trzecią stronę z wybraną opcją roczną i wracająć z powrotem zmieniają się kolory słów 'Monthly' oraz 'Yearly' na odwrotne, po kliknięciu pierwszy raz checkboxa nic się nie dzieje, dopiero za drugim razem wszystko wraca do normy, a obiekt zostaje zamieniony z powrotem na '(Monthly)'.
                            />
                        </label>
                        <h1 style={{color: yearlyBilling !== 'yearly' && 'var(--light-gray)'}}>Yearly</h1>
                </div>
            </div>
        </div>
    );
}

export default SelectPlan;