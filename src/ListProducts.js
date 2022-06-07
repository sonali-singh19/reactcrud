import React from "react";
import ProductService from "./ProductService";

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    ProductService.getAllProducts()
      .then((response) => {
        this.setState({ products: response.data.records });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProduct = (id) => {
    const obj = {
      id: id,
    };
    ProductService.deleteProduct(obj)
      .then((response) => {
        console.log("response==>", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Products List</h2>
        <div className="row">
          <button className="btn btn-primary"> Add Product</button>
        </div>
        <br></br>
        <div className="row" style={{ marginLeft: "10px" }}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Product Id</th>
                <th> Product Name</th>
                <th> Price</th>
                <th> Product Description</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => {
                //console.log('product==>', product)
                return (
                  <tr key={product.id}>
                    <td> {product.id} </td>
                    <td> {product.name} </td>
                    <td> {product.price} </td>
                    <td> {product.description} </td>
                    <td>
                      <button className="btn btn-info">Update </button>
                      <button
                        onClick={() => this.deleteProduct(product.id)}
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        className="btn btn-info"
                      >
                        View{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListProducts;
