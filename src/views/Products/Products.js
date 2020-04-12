import React from "react";
import request from "../../service/connector";

export default class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            product: null,
        }
    }

    componentDidMount() {
        request('GET', "http://localhost:8080/products").then((data) => {
            this.setState({
                products: data.data,
            });
        })
    }

    handleOnRowClick = (event) => {
        const productId = event.target.closest("tr").getAttribute("id");

        request('GET', `http://localhost:8080/product/${productId}`).then((data) => {
            this.setState({
                product: data.data,
            });
        })
    };

    renderTableRows = () => {
        const {products} = this.state;
        const rows = [];

        products.forEach((product) => {
            rows.push(
                <tr id={product.id} onClick={this.handleOnRowClick}>
                    <th scope="row">{rows.length + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                </tr>
            )
        });

        return rows;
    };

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        All Products
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderTableRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        Selected Product
                    </div>
                    <div className="card-body">
                        <p>{this.state.product && this.state.product.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}