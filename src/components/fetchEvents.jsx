import React from 'react';
class fetchEvents extends React.Component{
    state={
        loading:true
    }
    componentDidMount(){
        const url=""

    }
    render(){
        return(
            <div>
                {this.state.loading ? <div>loading</div>:<div>singer fetched</div>}
            </div>
        )
    }
}


export default fetchEvents;