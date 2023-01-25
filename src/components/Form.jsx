import React, {useState} from 'react';
import './Form.scss'

import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({});

    const pageDisplay = () => {
        if (page === 0) {
            return <YourInfo/>
        }
        if (page === 1) {
            return <SelectPlan/>
        }
        if (page === 2) {
            return <AddOns/>
        }
        if (page === 3) {
            return <Summary/>
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
                        <div className={page === 3 ? 'active circle' : 'circle' }>
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
                    <div className="footer">
                        {page !== 0 && <button
                            disabled={page === 0}
                            onClick={() => {setPage((currentPage) => currentPage -1)}}
                            className="button-prev">Go Back</button>}
                        {page < 3 && <button
                            onClick={() => {setPage((currentPage) => currentPage + 1)}}
                            className="button-next">Next Step</button>}
                        {page === 3 && <button
                            className="button-confirm">Confirm</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;