import React from "react";

class ShoppingcartItem extends React.Component {
  render(){
    return(
        <div className="shopping-cart-product">
          <div className="product-info">
            <div>
              <h3>{this.props.product.name} </h3>
              <p>{this.props.product.price} &times; {this.props.product.quantity}</p>
            </div>
            <img src="https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" />
          </div>
          <div className="product-count">
            <button onClick={this.props.minusQuantity(this.props.product)}>-</button>
            <span>{this.props.product.quantity}</span>
            <button onClick={this.props.handleAddProduct(this.props.product)}>+</button>
          </div>
        </div>
    )
  }
}

class ShoppingcartComponent extends React.Component{
    render(){
      const list = Object.values(this.props.products).map((product)=>{
        return <ShoppingcartItem product={product} handleAddProduct={this.props.handleAddProduct} minusQuantity={this.props.minusQuantity} />
      });
        return(
            <div className="shopping-cart">
      <div className="shopping-cart-products">          
        {list}
      </div>
      <div className="shopping-cart-summary">
        <div>Total: <b>${this.props.total}</b></div>
        <div><button>Purchase</button></div>
      </div>
    </div>
        )
    }
}

export default ShoppingcartComponent