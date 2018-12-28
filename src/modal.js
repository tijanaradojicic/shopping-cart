import React from "react";

class Modal extends React.Component{
    render(){
        console.log(this.props);
        return(

        <div class="modal">
            <div class="modal-container">
                <button class="close-button" onClick={this.props.toggleModal}>&times;</button>
                <div class="modal-content">
                <img src={this.props.image}/>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <button className="buy-button">add to cart</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Modal