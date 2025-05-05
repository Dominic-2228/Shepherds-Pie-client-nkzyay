import "./ViewOrder.css"
import { useEffect, useState } from "react";
import { getOrdersWithCustomer } from "../../services/getOrders.jsx";


export const ViewOrder = () => {
  let orderMonthArr = []
  const [orders, setOrders] = useState([]);
  const [orderDate, setOrderDate] = useState([]);
  const [month, setMonth] = useState(null)

  useEffect(() => {
    getOrdersWithCustomer().then(setOrders);
  }, []);

  useEffect(() => {}, []);

  const isDate = (dateString) => {
    const orderDate = new Date(dateString);
    const today = new Date();

    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  };

  useEffect(() => {
    orders.map((order) => {
      const date = new Date(order.orderTime);
      const orderMonthInt = date.getUTCMonth() + 1;
      orderMonthArr.push(orderMonthInt)
      setOrderDate(orderMonthArr)
    });
  }, [orders])
 
  


  return (
    <div className="view-orders-container">
      <h2>Today's Orders</h2>
      <select onChange={(e) => setMonth(parseInt(e.target.value))}>
        <option>Month</option>
          {[
            ...new Set(
              orders.map((order) => new Date(order.orderTime).getUTCMonth() + 1)
            ),
          ]
            .sort((a, b) => a - b)
            .map((month, index) => {
              return (
                <option key={index} value={month}>
                  {" "}
                  {month}
                </option>
              );
            })}
      </select>
      {orders
        .filter((order) => month > 0 ? new Date(order.orderTime).getUTCMonth() + 1 === month 
        : isDate(order.orderTime))
        .map((order) => (
          <fieldset className="order-fieldset" key={order.id} style={{ marginBottom: "1rem" }}>
            <div>
              <h3>Order Time: {order.orderTime}</h3>
            </div>
            <div>
              <h3>Order ID: {order.id}</h3>
            </div>
            <div>
              <h3>Customer: {order.customer?.name}</h3>
            </div>
            <div>
              <h3>Status: {order.status}</h3>
            </div>
          </fieldset>
        ))}
    </div>
  );
};
