import React from 'react';
import '../styles/pagination.scss';


const pagination=({eventsPerPage,totalEvents,paginate})=>{  
    const pageNumbers=[];
    for(let i=1;i<Math.ceil(totalEvents/eventsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
            <nav>
                <ul class="pagination">
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