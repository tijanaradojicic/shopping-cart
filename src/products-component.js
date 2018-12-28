import React from "react";
import Modal from './modal';
import Spinner from './spinner';

function If(props){
    return props.condition ? props.children : null;
}

class ProductItem extends React.Component{
    state={
        displayModal: false
    }

    toggleModal = event => {
        //this.setState(prevState => ({displayModal: !prevState.displayModal}));
        this.setState(function(prevState){
            return{
                displayModal: !prevState.displayModal
            }
        })
    }


    
    render(){
        return(
            <div className="product">
            <img src="https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" />
            <p>{this.props.name}</p>
            <p>{this.props.price}</p>
            <button onClick={this.toggleModal} className="details-button">Details</button>
            <button onClick={this.props.handleAdd(this.props.product)} className="buy-button">Buy</button>
            <If condition={this.state.displayModal}>
            <Modal toggleModal={this.toggleModal}{...this.props}/>
            </If>
            <If condition={this.state.displayModal}>
            <Modal toggleModal={this.toggleModal}{...this.props}/>
            </If>
            </div>
        )
    }
}

class ProductComponent extends React.Component{
    render(){
        const list=this.props.products.map(product=>{
            return <ProductItem handleAdd={this.props.handleAddProduct} key={product.id} name={product.name} price={product.price} image="https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" product={product}/>
        })
        return (
            <div className="list-products">
            {list}
            <If condition={this.props.products.length==0}>
            <Spinner/>
            </If>
            </div>
            
        )
    }
}

export default ProductComponent