import React from "react";

class ProductItem extends React.Component{
    render(){
        return(
            <div className="product">
        <img src="https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <button className="details-button">Details</button>
        <button className="buy-button">Buy</button>
      </div>
        )
    }
}

class ProductComponent extends React.Component{
    render(){
        const list=this.props.products.map(function(product){
            return <ProductItem key={product.id} name={product.name} price={product.price} image={product.image}/>
        })
        return (
            <div className="list-products">
            {list}

    </div>
        )
    }
}

export default ProductComponent