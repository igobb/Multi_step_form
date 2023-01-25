import React from 'react';
import './YourInfo.scss';

function YourInfo(props) {
    return (
        <div className="your-info__container">
            <div className="header">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <form className="form__inputs">
                    <label form="user-name">Name</label>
                    <input type="text" name="user-name" id="user-name" required placeholder="e.g. Stephen King"/>
                    <label form="user-name">Email Address</label>
                    <input type="email" name="user-email" id="user-email" required placeholder="e.g. stephenking@lorem.com"/>
                    <label form="user-name">Phone Number</label>
                    <input type="tel" name="user-tel" id="user-tel" required placeholder="e.g. +1 234 567 890"/>
            </form>
        </div>
    );
}

export default YourInfo;