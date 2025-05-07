import "./ViewOrder.css";
import { useEffect, useState } from "react";
import { getOrdersWithCustomer } from "../../services/orderService.jsx";
import { Link } from "react-router-dom";

export const ViewOrder = () => {
  const [orders, setOrders] = useState([]);
  const [month, setMonth] = useState(0); // 0 means "Today"

  useEffect(() => {
    getOrdersWithCustomer().then(setOrders);
  }, []);

  const isToday = (dateString) => {
    const orderDate = new Date(dateString);
    const today = new Date();

    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  };

  const filteredOrders = orders.filter((order) => {
    if (month > 0) {
      return new Date(order.orderTime).getUTCMonth() + 1 === month;
    }
    return isToday(order.orderTime);
  });

  const formatDate = (givenDate) => {
    const date = new Date(givenDate);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="view-orders-container">
      <div className="header-row">
        <select
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          <option value="0">Today</option>
          {[
            ...new Set(
              orders.map((order) => new Date(order.orderTime).getUTCMonth())
            ),
          ]
            .sort((a, b) => a - b)
            .map((monthVal, index) => {
              const monthName = new Date(0, monthVal).toLocaleString("en-US", {
                month: "long",
              });
              return (
                <option key={index} value={monthVal + 1}>
                  {monthName}
                </option>
              );
            })}
        </select>
        <h2 className="header-center">
          {month === 0 ? "Today's Orders" : "Orders by Month"}
        </h2>
      </div>

      {filteredOrders.map((order) => (
        <fieldset
          className="order-fieldset"
          key={order.id}
          style={{ marginBottom: "1rem" }}
        >
          <div>
            <h3>Order Time: {order.orderTime}</h3>
          </div>
          <div>
            <Link to={`/OrderDetails/${order.id}`}>
              <h3>Order ID: {order.id}</h3>
            </Link>
          </div>
          <div>
            <h3>Customer: {order.customer?.name}</h3>
          </div>
          <div className="order-status">
            <h3>Status:</h3>
            <select className="order-status">
              <option>{order.status}</option>
              <option>Completed</option>
            </select>
          </div>
        </fieldset>
      ))}
    </div>
  );
};
