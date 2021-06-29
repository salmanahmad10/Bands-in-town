import React from 'react';
import TextField from '@material-ui/core/TextField'; 
function searchBar(props) {
    const getSearchTerm=(e)=>{
        props.handler(e.target.value)
    }
    return (
        <div>
             <form>
                <TextField  id="filled-basic" className="searchEvents" label="Search Events" variant="filled" onChange={getSearchTerm} />
            </form>
        </div>
    );
}

export default searchBar;