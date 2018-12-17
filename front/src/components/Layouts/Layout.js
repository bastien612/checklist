import Footer from "./Footer";
import React from 'react';
import Header from './Header'

export default class Layout extends React.Component{
    
    render() {
        console.log("Le titre : " + JSON.stringify(this.props.title));
        return (
            <React.Fragment>
                <Header/>
                {/* {props.title} */}
                {this.props.page}
                <Footer/>
            </React.Fragment>
            
        )
    }
}   