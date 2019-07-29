import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Tabs from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
                    <Link to='/' className="store">Online Shop</Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5"></li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <button>
                            <i className="fas fa-cart-plus" />{`Cart(${this.props.productCount})`}
                        </button>
                    </Link>
                    {/* <Tabs></Tabs> */}
                </nav>
            </div>
        );
    }
};
