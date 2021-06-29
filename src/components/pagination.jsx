import React from 'react';
import '../styles/pagination.scss';


const pagination=({eventsPerPage,totalEvents,paginate})=>{  
    const pageNumbers=[];
    console.log(eventsPerPage)
    console.log(totalEvents)
    for(let i=1;i<Math.ceil(totalEvents/eventsPerPage)+1;i++){
        pageNumbers.push(i)
    }
    return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number=>(
                        <li key={number} className="pagination">
                            <a onClick={()=>{paginate(number)}}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
}
export default pagination;