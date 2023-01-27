import React, {useState} from 'react';
import './Form.scss'

import YourInfo from "../YourInfo/YourInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import AddOns from "../AddOns/AddOns";
import Summary from "../Summary/Summary";
import Thanks from "../Thanks/Thanks";

function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        choosenPlan: '',
        pricePlan: 0,
        choosenBilling: '(Monthly)',
        onlineService: false,
        onlineServicePrice: 0,
        largerStorage: false,
        largerStoragePrice: 0,
        customizableProfile: false,
        customizableProfilePrice: 0,
    })

    const pageDisplay = () => {
        if (page === 0) {
            return <YourInfo formData={formData} setFormData={setFormData}/>
        }
        if (page === 1) {
            return <SelectPlan formData={formData} setFormData={setFormData}/>
        }
        if (page === 2) {
            return <AddOns formData={formData} setFormData={setFormData}/>
        }
        if (page === 3) {
            return <Summary formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
        }
        if (page === 4) {
            return <Thanks formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="form">
            <div className="form__container">
                <div className="aside">
                    <div className="aside__step-one">
                        <div className={page === 0 ? 'active circle' : 'circle' }>
                            <p>1</p>
                        </div>
                        <div className="info">
                            <h1>Step 1</h1>
                            <p>Your info</p>
                        </div>
                    </div>
                    <div className="aside__step-two">
                        <div className={page === 1 ? 'active circle' : 'circle' }>
                            <p>2</p>
                        </div>
                        <div className="info">
                            <h1>Step 2</h1>
                            <p>Select plan</p>
                        </div>
                    </div>
                    <div className="aside__step-three">
                        <div className={page === 2 ? 'active circle' : 'circle' }>
                            <p>3</p>
                        </div>
                        <div className="info">
                            <h1>Step 3</h1>
                            <p>Add-ons</p>
                        </div>
                    </div>
                    <div className="aside__step-four">
                        <div className={page > 2 ? 'active circle' : 'circle' }>
                            <p>4</p>
                        </div>
                        <div className="info">
                            <h1>Step 4</h1>
                            <p>Summary</p>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="page__body">
                        {pageDisplay()}
                    </div>
                    {page < 4 && 
                        <div className="footer">
                        {page !== 0 && page < 4 && <button
                            disabled={page === 0}
                            onClick={() => {setPage((currentPage) => currentPage -1)}}
                            className="button-prev">Go Back</button>}
                        {page < 3 && <button
                            onClick={() => {setPage((currentPage) => currentPage + 1)}}
                            className="button-next">Next Step</button>}
                        {page === 3 && <button disabled={formData.name && formData.email && formData.tel && formData.choosenPlan ? '' : 'disabled'}
                            onClick={() => {setPage((currentPage) => currentPage + 1)}}
                            className="button-confirm">Confirm</button>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;