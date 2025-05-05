import { Link } from "react-router-dom";
import "./OrderDetails.css";
export const OrderDetails = () => {
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
          <div className="customer-detail-info"></div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Address</div>
          <div className="customer-detail-info"></div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Phone</div>
          <div className="customer-detail-info"></div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Email</div>
          <div className="customer-detail-info"></div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Table #</div>
          <div className="customer-detail-info"></div>
        </div>
        <div className="customer-detail">
          <div className="customer-detail-title">Date Created</div>
          <div className="customer-detail-info"></div>
        </div>
      </section>
      <section className="order-section">
        <h3>Your order is empty - please add a pizza</h3>
        <Link to="/CreatePizza">
          <button className="button pizza-button">Add Pizza</button>
        </Link>
      </section>
    </article>
  );
};

//If no pizzas in order display "Your order is empty, please add a pizza"
// Otherwise display current pizzas in order with details
