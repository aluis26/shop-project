import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './components/Store';
import Product from './components/Product';
import Navbar from './components/Navbar';
// import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';
// import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      products: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(newItem){
    console.log(newItem.id)
  // if the id of the new object is not in the card, add the new product
      var arr = this.state.products.filter(e=> e.id == newItem.id)
      if (arr.length === 0){
        newItem['amount']= 1
         this.setState({
      count: this.state.count + 1, products: [...this.state.products, newItem] }
     
      )
    }
  //if the id of the new product is already in the card, first increase the general counter 
    else{
      this.setState({
        count: this.state.count + 1 })      
        
    //second increase by one the amount of the product you have selected.
    // we settle a key as the id of the product we need to update 
      let key = newItem.id
      this.setState(prevState => ({   
        // modify the var products by mapping the products and changing only the product that has id (key) that we want.
        products: prevState.products.map(
          el => el.id === key? { ...el, amount: el.amount + 1 }: el
      )}))   
     

  };}



componentDidUpdate(){
console.log(this.state.products)}

 removeFromCart(Item) {
    var key = JSON.parse(Item.id)
    console.log(Item)
    
    if(this.state.count === 0){
      alert("There are no products in your cart")}

      // Define a variable that checks if the product is in the list
      
    var exist = this.state.products.filter(e=> e.id == key)
    //  if it exists then change the amount of the same product -1

    if(exist.length >0){
      this.setState( prevState => ({    
        products: prevState.products.map(
          el => el.id == key? { ...el, amount: el.amount - 1 }: el
          )}))    
    // also you need to change the general counter
      this.setState({
          count: this.state.count - 1 })
    // if you decrease the amount to 0 remove from the list of products.
      if(exist[0].amount == 1){
          this.setState(state => {
            const products = state.products.filter(el => el.id != key);      
            return {
              products,
            }
          })}}
        
          
    // if the product is not in the list you cannot remove it:
       else alert('you cannot remove this product')

  }
   
   
  render () {
    return (
      <div>
        <BrowserRouter>
        <Navbar productCount={this.state.count}/>
        <Switch>
          <Route exact path="/" render={() => <Store products={this.state.products} handleAddToCart={this.addToCart} handleRemoveFromCart={this.removeFromCart}/>} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" render ={() => <Cart products={this.state.products} count={this.state.count} handleAddToCart={this.addToCart} handleRemoveFromCart={this.removeFromCart}/> } />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;

{/* <i className="fas fa-home" /> */}
// https://www.robinwieruch.de/react-state-array-add-update-remove/