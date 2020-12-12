import "./App.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App({ products }) {
  return (
    <div className="App">
      <Route exact path="/">
        <Home products={products} />
      </Route>
      <Route exact path="/add-products">
        <AddProduct />
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: [...state.products],
  };
};

export default connect(mapStateToProps)(App);
// , { add_product, delete_product }
