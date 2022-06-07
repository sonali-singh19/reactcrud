import React from "react";
import ProductService from "./ProductService";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      categoryId: "",
      message: "",
    };
  }

  changeProductNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };
  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };
  changeCategoryIdHandler = (event) => {
    this.setState({ categoryId: event.target.value });
  };
  createProduct = (event) => {
    event.preventDefault();
    let productData = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      category_id: this.state.categoryId,
    };

    ProductService.createProduct(productData)
      .then((response) => {
        //
        console.log("response===>", response);
        if (response.status === 201) {
          this.setState({ message: "I have created product" });
        }
      })
      .catch((error) => {
        console.log("Error==>", error);
        if (error.code === "ERR_BAD_REQUEST") {
          this.setState({ message: error.response.data.message });
        }
        //this.setState({ message: response.data.message})
      });
  };
  render() {
    return (
      <div>
        <br></br>
        <h2>{this.state.message != "" ? this.state.message : ""}</h2>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Product Name: </label>
                    <input
                      placeholder="Product Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={(event) => this.changeProductNameHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder="Description Name"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={(event) => this.changeDescriptionHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Price"
                      name="Price"
                      className="form-control"
                      value={this.state.price}
                      onChange={(event) => this.changePriceHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Category Id: </label>
                    <input
                      placeholder="Category Id"
                      name="categoryId"
                      className="form-control"
                      value={this.state.categoryId}
                      onChange={(event) => this.changeCategoryIdHandler(event)}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={(event) => this.createProduct(event)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    /*  onClick={this.cancel.bind(this)} */ style={{
                      marginLeft: "10px",
                    }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
