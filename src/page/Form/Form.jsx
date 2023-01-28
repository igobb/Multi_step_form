import React, {useState} from 'react';
import './Form.scss'

import YourInfo from "../../components/YourInfo/YourInfo";
import SelectPlan from "../../components/SelectPlan/SelectPlan";
import AddOns from "../../components/AddOns/AddOns";
import Summary from "../../components/Summary/Summary";
import Thanks from "../../components/Thanks/Thanks";
import Aside from '../../components/Aside/Aside';
import Footer from '../../components/Footer/Footer';

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
                    <Aside page={page} />
                </div>
                <div className="main">
                    <div className="page__body">
                        {pageDisplay()}
                    </div>
                    {page < 4 && 
                    <div className="footer">
                        <Footer page={page} setPage={setPage} formData={formData} />
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;