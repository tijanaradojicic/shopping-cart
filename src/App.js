import React, { Component } from 'react';
import logo from './logo.svg';
import FormComponent from "./form-component"
import ProductsComponent from "./products-component"
import ShoppingcartComponent from "./shoppingcart-component"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products: [
        {id:1, name: "Sample Watch", price:300, description:"", image:"url"},
        {id:2, name: "Product #2", price:199, description:"", image:"url"},
        {id:3, name: "Product #2", price:199, description:"", image:"url"}

      ]
    }
  }

  addProduct = (product) => {
    product = {
      ...product,
      id: this.state.products.length+1
    }
    this.setState({products:[...this.state.products, product]})
  }

  

  render() {
    return (
      <div className="container">
          <FormComponent addProduct={this.addProduct}/>
        <ProductsComponent products={this.state.products}/>
        <ShoppingcartComponent/>
      </div>
    );
  }
}

export default App;

