import React, {useState} from 'react';
import './SelectPlan.scss';
import {images} from "../constans";

function SelectPlan(props) {

    const [isActive, setIsActive] = useState(false);
    const [yearlyBilling, setYearlyBilling] = useState(false);
    
    const handleSwitch = () => {
        yearlyBilling ? setYearlyBilling(false) : setYearlyBilling(true);
    }
    console.log(isActive)
    console.log(yearlyBilling)
    return (
        <div className="page__container">
            <div className="header">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plan-options__container">
               <div className="plan-options__items">
                   <div className="plan-options__item" onClick={()  => setIsActive('elementArcade')} style={{backgroundColor: isActive === 'elementArcade' ? 'var(--magnolia)' : ''}}>
                       <div className='item__img'>
                           <img src={images.arcade} alt=''/>
                       </div>
                       <div className="item__info">
                           <h1>Arcade</h1>
                            {!yearlyBilling ? <p>$9/mo</p> : <>
                                <p>$90/yr</p>
                                <p className='p__yearly-billings'>2 months free</p>
                            </>}
                           
                       </div>
                   </div>
                   <div className="plan-options__item" onClick={() => setIsActive('elementAdvanced')} style={{backgroundColor: isActive === 'elementAdvanced' ? 'var(--magnolia)' : ''}}>
                       <div className='item__img'>
                           <img src={images.advanced} alt='' />
                       </div>
                       <div className="item__info">
                           <h1>Advanced</h1>
                            {!yearlyBilling ? <p>$12/mo</p> : <>
                                <p>120/yr</p>
                                <p className='p__yearly-billings'>2 months free</p>
                            </>}
                       </div>
                   </div>
                   <div className="plan-options__item" onClick={() => setIsActive('elementPro')} style={{backgroundColor: isActive === 'elementPro' ? 'var(--magnolia)' : ''}}>
                       <div className='item__img'>
                           <img src={images.pro} alt='' />
                       </div>
                       <div className="item__info">
                           <h1>Pro</h1>
                            {!yearlyBilling ? 
                            <p>$15/mo</p> : 
                            <>
                                <p>$150/yr</p>
                                <p className='p__yearly-billings'>2 months free</p>
                            </>}
                       </div>
                   </div>
               </div>
               <div className='plan-options__switcher'>
                    <h1 style={{color: yearlyBilling && 'var(--light-gray)'}}>Montly</h1>
                    <label>
                        <input type="checkbox" id="billingCheckbox" onClick={handleSwitch}/>
                    </label>
                    <h1 style={{color: !yearlyBilling && 'var(--light-gray)'}}>Yearly</h1>
               </div>
            </div>
        </div>
    );
}

export default SelectPlan;