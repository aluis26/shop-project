import React, { Component } from 'react';
import ProductCatalog from '../data/products';
import Button from 'react-bootstrap/Button';
import './store.css';

class Store extends Component {

  render () {
    
    return ( 
      <div>
        <h2 className="title">Computer Life Shop</h2>
          <div className= "wrapper">
            
          {ProductCatalog.map((product) => {
            // to render the total units:
            var units = this.props.products.filter(el => el.id == product.id)
            var unitsResult = ""
            if (units.length == 0){
              unitsResult = 0              
            } else{ unitsResult = units[0].amount}

              return (
                
                <div className="product-container">     
                    <img src={`/images/${product.image}.png`} alt="product" className="product-image"/>  
                    <div className="name">  {product.name} </div>
                    <div>  {product.price}€ </div>          
                    <div> Units: {unitsResult} </div>     
                    <i className="fas fa-cart-plus" /> 
                    <Button onClick={() => this.props.handleAddToCart(product)}>+1</Button> <Button onClick={() => this.props.handleRemoveFromCart(product)}>-1</Button>
                </div>
                
              )
          })}
          </div>
      </div>
    )
  }
};

  
export default Store;
