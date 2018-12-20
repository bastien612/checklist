import React from 'react';

export default class Layout extends React.Component{
    
    render() {
        console.log("Le titre : " + JSON.stringify(this.props.title));
        return (
            <React.Fragment>
                
                {this.props.title}
                {this.props.page}
            </React.Fragment>
            
        )
    }
}   