import React from 'react';
import './Summary.scss'

function Summary({formData, setPage}) {

    const handleClick = () => {
        setPage(1)
    }

    return (
        <div className='page__container'>
            <div className='header'>
                <h1>Finishing Up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='finishing__container'>
                <div className='finishing__panel'>
                    <div className='choosen-plan'>
                        <div className='plan-name'>
                            <h1>{formData.choosenPlan} {formData.choosenBilling}</h1>
                            <p onClick={handleClick}>Change</p>
                        </div>
                        <div className='plan-price'>
                        {formData.choosenBilling === '(Yearly)' ? 
                        <>
                            ${formData.pricePlan * 10}/yr
                        </>: 
                        <>
                            ${formData.pricePlan}/mo
                        </>}
                        </div>
                    </div>
                    <div className='choosen-add-ons'>
                        <div className='add-ons-name'>
                            {formData.onlineService && <p>Online service</p>}
                            {formData.largerStorage && <p>Larger storage</p>}
                            {formData.customizableProfile && <p>Customizable profile</p>}
                        </div>
                        <div className='add-ons-price'>
                            {formData.onlineService ? 
                            <>
                                {formData.choosenBilling === '(Yearly)' ? <p>+{formData.onlineServicePrice * 10}$/yr</p> : <p>+{formData.onlineServicePrice}$/mo</p>}
                            </> : null}

                            {formData.largerStorage ? 
                            <>
                                {formData.choosenBilling === '(Yearly)' ? <p>+{formData.largerStoragePrice * 10}$/yr</p> : <p>+{formData.largerStoragePrice}$/mo</p>}
                            </> : null}

                            {formData.customizableProfile ? 
                            <>
                                {formData.choosenBilling === '(Yearly)' ? <p>+{formData.customizableProfilePrice * 10}$/yr</p> : <p>+{formData.customizableProfilePrice}$/mo</p>}
                            </> : null}
                        </div>
                    </div>
                </div>
                {formData.name !== '' && formData.email !== '' && formData.tel !== '' && formData.choosenPlan !== '' ? 
                <div className='finishing__summary'>
                    <p className='summary-name'>Total ({formData.choosenBilling === '(Yearly)' ? 'per year' : 'per month'})</p>
                    <p className='summary-price'>{formData.choosenBilling === '(Yearly)' ? 
                        <>
                            +${(formData.pricePlan + formData.onlineServicePrice + formData.largerStoragePrice + formData.customizableProfilePrice) * 10}/yr
                        </>: 
                        <>
                            +${formData.pricePlan + formData.onlineServicePrice + formData.largerStoragePrice + formData.customizableProfilePrice}/mo
                        </>}</p>
                </div> : 
                <>
                    <div className='finishinh__alert'>
                        <p>You dont give us all informations that we need, you can't confirm this form!</p>
                        <p>We need from you: {formData.name === '' && 'Name,'} {formData.email === '' && 'Email, '} {formData.tel === '' && 'Phone,'}</p> <p>{formData.choosenPlan === '' && 'You need to choose a plan!'}</p>
                    </div>    
                </>
                }
            </div>
        </div>
    );
}

export default Summary;