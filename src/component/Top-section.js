import React, { Component } from 'react'

class BoxitemComponent extends Component{
    render(){
        return(

            <div className="section-top">
                <div className="container">
                    <div className="head-content">
                        <h1>{ this.props.headtitle }</h1>

                        <p>{ this.props.headcontent }</p>
                        <button className="btn btn-primary my-2">Main call to action</button>
                        <button className="btn btn-secondary my-2 my-2">Secondary action</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default BoxitemComponent;