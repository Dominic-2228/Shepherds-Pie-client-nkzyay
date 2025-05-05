import { Link } from "react-router-dom";
import "./OrderDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderById } from "../../services/orderService";
export const OrderDetails = () => {
  const [order, setOrder] = useState([]);

  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOrderById(orderId).then((orderArr) => {
      const orderObj = orderArr[0];
      setOrder(orderObj);
    });
  }, []);

  let d = "";
  let t = "";
  if (order?.orderTime) {
    let splitDate = order.orderTime.split("T");
    d = splitDate[0];
    t = splitDate[1].split("Z");
  }

  return (
    <article className="order-details-container">
      <div className="title">
        <h2>Order Id# </h2>
      </div>
      <div className="title">
        <h3>Customer Info</h3>
      </div>
      <section className="customer-info">
        <div className="customer-detail">
          <div className="customer-detail-title">Name</div>
          <div className="customer-detail-info">{order?.customer?.name}</div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Address</div>
          <div className="customer-detail-info">{order?.customer?.address}</div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Phone</div>
          <div className="customer-detail-info">{order?.customer?.phone}</div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Email</div>
          <div className="customer-detail-info">{order?.customer?.email}</div>
        </div>
        {order.tableNumber && (
          <div className="customer-detail">
            <div className="customer-detail-title">Table #</div>
            <div className="customer-detail-info">{order?.tableNumber}</div>
          </div>
        )}
        <div className="customer-detail">
          <div className="customer-detail-title">Order Date</div>
          <div className="customer-detail-info">{d}</div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Order Time</div>
          <div className="customer-detail-info">{t}</div>
        </div>
      </section>
      <section className="order-section">
        <h3>Your order is empty - please add a pizza</h3>
        <button
          className="button pizza-button"
          onClick={() => {
            navigate(`/CreatePizza/${orderId}`);
          }}
        >
          Add Pizza
        </button>
      </section>
    </article>
  );
};

//If no pizzas in order display "Your order is empty, please add a pizza"
// Otherwise display current pizzas in order with details
