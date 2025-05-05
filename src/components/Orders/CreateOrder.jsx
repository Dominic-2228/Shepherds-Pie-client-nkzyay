
import { useState } from "react"
import "./Order.css"

export const CreateOrder = ({currentUser}) => {

    const [customerDetails, setCustomerDetails] = useState()

    return (
        <form className="customer-info">
            <h2>Customer Info</h2>
            <div className="drop-down">
                <article className="pickup-option">
                    <select
                     name="pickup-option">
                        <option value="1">Dine-In</option>
                        <option value="2">Delivery</option>
                    </select>
                </article>
            </div>
    
            <div className="form-group">
                <label>Name</label>
                <input type="text"
                className="form-control"
                placeholder="Type name here"
                />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text"
                className="form-control"
                placeholder="Type address here"
                />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text"
                className="form-control"
                placeholder="Type phone number here"
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text"
                className="form-control"
                placeholder="Type email here"
                />
            </div>
            <div className="form-group">
                <label>Table #</label>
                <input type="text"
                className="form-control"
                placeholder="Type customer's table number here"
                />
            </div>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn:focus">Save Order</button>
                </div>
            </fieldset>
        </form>
    ) 
}