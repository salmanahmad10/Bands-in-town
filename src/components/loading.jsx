import React from 'react';
import '../styles/loading.scss';

const loading=()=>{  
    return(
        <div className="loadingContainer">
        <div className="loading">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}
export default loading;