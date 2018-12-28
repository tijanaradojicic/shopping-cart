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
        /*{id:1, name: "Sample Watch", price:300, description:"", image:"url"},
        {id:2, name: "Product #2", price:199, description:"", image:"url"},
        {id:3, name: "Product #2", price:199, description:"", image:"url"}*/
        
      ],
      shoppingCartProducts: {},
      total:0
    }
  }

  addToShoppingCart= (obj) => {
    return (event) => {
        const temp = {
            ...this.state.shoppingCartProducts,
            [obj.id]: this.state.shoppingCartProducts[obj.id] || obj
        }
        if(!temp[obj.id].quantity){
          temp[obj.id].quantity = 0;
        }
        temp[obj.id].quantity++;
        this.setState({
            shoppingCartProducts: temp
        },()=>{
          this.total(); 
        })   
    }
}

  addProduct = (product) => {
    product = {
      ...product,
      id: this.state.products.length+1
    }
    this.setState({products:[...this.state.products, product]},()=>{
      localStorage.setItem("products",JSON.stringify(this.state.products))
    })
  }

  componentDidMount(){
    const products = localStorage.getItem("products");
    setTimeout(()=> {
      this.setState({
        products: JSON.parse(products || '[]')
      })
    },1000)
    
  }

  minusQuantity = (obj) =>{
    return (event) => {
      const temp = {
          ...this.state.shoppingCartProducts,
          [obj.id]: this.state.shoppingCartProducts[obj.id] || obj
      }
      
      temp[obj.id].quantity--;
      if(temp[obj.id].quantity===0){
        delete temp[obj.id]
      }
      this.setState({
          shoppingCartProducts: temp
      },()=>{
        this.total();
      })   
  }  }

  total = () =>{
    const total = Object.values(this.state.shoppingCartProducts).reduce((acc,product)=>{
      acc=acc + (product.price * product.quantity);
      return acc;
    },0)
    console.log(total);
    this.setState({
      total: total
    })
  }

  

  render() {
    return (
      <div className="container">
        <FormComponent addProduct={this.addProduct}/>
        <ProductsComponent products={this.state.products} handleAddProduct = {this.addToShoppingCart} />
        <ShoppingcartComponent products={this.state.shoppingCartProducts} handleAddProduct={this.addToShoppingCart} minusQuantity={this.minusQuantity} total={this.state.total}/>

      </div>
    );
  }
}

export default App;

