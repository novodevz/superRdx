import { useSelector } from "react-redux";
import { slctCartProds } from "./cartSlice";
import Item from "../super/Item";
import Table from "react-bootstrap/Table";

const MyCart = () => {
  const cartProds = useSelector(slctCartProds);
  // Calculate subtotal for each item
  const calculateSubtotal = (item) => {
    return item.amount * item.price;
  };

  // Calculate total balance
  const totalBalance = cartProds.reduce((total, item) => {
    return total + calculateSubtotal(item);
  }, 0);

  return (
    <div className="container-fluid">
      <h1>my cart</h1>
      <p>some text here in p tag</p>

      <div className="row">
        <div className="col-lg-8">
          {cartProds &&
            cartProds.length !== 0 &&
            cartProds.map((prod) => <Item prod={prod} />)}
        </div>
        <div className="col-lg-4">
          <h2>balance:</h2> <h3>${totalBalance.toFixed(2)}</h3>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>product</th>
                <th>price</th>
                <th>amount</th>
                <th>sub total</th>
              </tr>
            </thead>
            <tbody>
              {cartProds &&
                cartProds.length !== 0 &&
                cartProds.map((prod, index) => (
                  <tr key={prod.id}>
                    <td>{index + 1}</td>
                    <td>{prod.name}</td>
                    <td>${prod.price}</td>
                    <td>{prod.amount}</td>
                    <td>${prod.price * prod.amount}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
