import React from "react";
import CreateProduct from "./CreateProduct";
import ListProducts from "./ListProducts";
class App extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div>
        
        <CreateProduct />
        <ListProducts />
      </div>
    );
  }
}

export default App;
