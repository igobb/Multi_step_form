import React from "react";

const Aside = ({page}) => {
    return ( 
        <>
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
        </>
     );
}
 
export default Aside;