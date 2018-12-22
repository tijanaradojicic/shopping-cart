import React from "react";

class FormComponent extends React.Component{
    state={
        name:"",
        price:0,
        description:"",
        image:""
    }

  

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addProduct(this.state);
      }


    render(){
        return (
        <div className="add-product">
      <form>
        <div>
          <label>Product name:</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </div>
        
        <div>
          <label>Product description:</label>
          <textarea name="" onChange={this.handleChange} placeholder="Sample description..."></textarea>
        </div>
        
        <div>
          <label>Product image:</label>
          <input type="text" placeholder="http://...jpg" />
        </div>
        
        <div>
          <label>Product price:</label>
          <input type="number" min="0" placeholder="33.50" />
        </div>
        
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    </div>
    )
    }
}

export default FormComponent