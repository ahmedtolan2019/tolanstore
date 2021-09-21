import React, { Component } from "react";

export default class Thanks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <div className="mt-5 py-1 border rounded shadow bg-secondary text-white">
              <dt className="test-dark fs-2 text-center">Tolan Store</dt>
            </div>
            <div className=" my-5 p-4 border rounded shadow bg-light">
              <dt className="test-dark fs-2 text-center">Thank You</dt>
              <p className="text-center fs-3">For your order</p>
              <dt className="test-dark fs-2 text-center border rounded shadow-sm">
                Order Details
              </dt>
              <dd className="test-dark mt-2 text-secondary text-center">
                ____________________
              </dd>
              <dt className="test-dark mt-3 text-dark">#ID</dt>
              <dd className="test-dark mt-2 text-secondary">
                {this.props.order.id}
              </dd>
              <dt className="test-dark mt-3 text-dark">Address</dt>
              <dd className="test-dark mt-2 text-secondary">
                {this.props.order.address}
              </dd>
              <dt className="test-dark mt-3 text-dark">No. Of Items</dt>
              <dd className="test-dark mt-2 text-secondary">
                {this.props.order.cartItems}
              </dd>
              <dt className="test-dark mt-3 text-dark">Total Price</dt>
              <dd className="test-dark mt-2 text-secondary">
                {this.props.order.cartPrice}
              </dd>

              <dd className="test-dark mt-2 text-secondary text-center">
                ____________________
              </dd>
            </div>
            <button
              onClick={this.props.handleClick}
              className="btn btn-primary align-self-center"
            >
              Return To Store
            </button>
          </div>
        </div>
      </div>
    );
  }
}
