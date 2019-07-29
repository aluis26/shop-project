import React, { Component } from 'react';
import ProductCatalog from '../data/products';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../store.css';

class Store extends Component {

  render () {
    
    return ( 
      <div>
          <Row>
            
          {ProductCatalog.map((product) => {
            // to render the total units:
            var units = this.props.products.filter(el => el.id == product.id)
            var unitsResult = ""
            if (units.length == 0){
              unitsResult = 0              
            } else{ unitsResult = units[0].amount}

              return (
                <Col xs={4}>
                  <div className="product-container">
                <Link to={`/data/products/${product.name}`} key={product.id}>
                
                  <img src={product.image} alt="product" className="product-image"/>
                </Link>
                
                <div className="break"> Product: {product.name} </div>
                <div> Price: {product.price} </div> 
               

                <div> Units: {unitsResult} </div> 
          
                <i className="fas fa-cart-plus" /> <Button onClick={() => this.props.handleAddToCart(product)}>+1</Button> <Button onClick={() => this.props.handleRemoveFromCart(product)}>-1</Button>
                </div>
                </Col>
              )
          })}
          </Row>
      </div>
    )
  }
};

  
export default Store;
