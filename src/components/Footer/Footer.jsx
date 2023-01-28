import React from "react";

const Footer = ({page, setPage, formData}) => {
    return ( 
        <>
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
        </>
     );
}

export default Footer;