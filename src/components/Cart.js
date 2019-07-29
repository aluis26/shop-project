import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export class Cart extends Component {  
  render(){
    if(this.props.count > 0){
      return (
        <div align="centre">
          {this.props.products.map((product) => {
            return (              
              <div>  
                <div>
                  <img src={product.image} alt="prod"/>
                </div>
                <div> Product: {product.name} </div>
                <div> Price: {product.price} </div>
                <div> Units: {product.amount} </div>
                <Button onClick={() => this.props.handleRemoveFromCart(product)}>Remove From Cart</Button>
              </div>
            )
          })}

          <div> Total Elements: {this.props.count} </div>
        </div>
      )
    } else {
        return (
          <div>
            You need some peanut butter in your life! Add some to your cart!
            <Link to='/'>
              <button type="button" className="btn btn-primary">Go to Store</button>
            </Link>
          </div>
      )
    }
  }
} 
  
export default Cart;

