import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './cart.css';

export class Cart extends Component {  
  render(){
    
    var total = this.props.products.reduce(function(prev, actual) {
      console.log(actual.amount, 'amount')
      console.log(actual.price, 'price')
     return prev + ((actual.amount) * (actual.price))
    },0);
    console.log(total)
    if(this.props.count > 0){
      return (
      <div>
        <h2 className= "title">Your cart:</h2>
        <div className= "wrapper">
          
          {this.props.products.map((product) => {
            return (  
                        
              <div className= "element" > 
                <div className= "boxImg"> 
                     <img className="imgCart" src={`/images/${product.image}.png`} alt="prod"/>
                </div>
                <div className="text">                 
                  <div className="name"> {product.name} </div>
                  <div> {product.price}€ </div>
                  <div> Units: {product.amount} </div>   
                  <div><Button onClick={() => this.props.handleRemoveFromCart(product)}>Remove From Cart</Button></div>
                </div> 
                
              </div>
          
            )
          })}
          <div className="boxTotal">
            <h4 className="total">Subtotal ({this.props.count} products)</h4>
            <div className='money'>{total}€</div>
          </div>
        </div>
        </div>
      )
    } else {
        return (
          <div className="empty">
            <div>
            Your basket is empty!
            </div>
            <Link to='/'>
              <button type="button" className="btn btn-primary">Go to Store</button>
            </Link>
          </div>
      )
    }
  }
} 
  
export default Cart;

