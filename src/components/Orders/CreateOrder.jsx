
import { useState } from "react"
import "./Order.css"
import { useNavigate } from "react-router"
import { createOrder } from "../../services/CustomerService"

export const CreateOrder = () => {

    const [customerDetails, setCustomerDetails] = useState()
    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()
        const handleSave = (event) => {
            event.preventDefault()
            if (order.deliveredByEmployeeId != 0 ) {
                const newOrder = {
                    orderTime: "",
                    name: order.name,
                    tableNumber: order.table,
                    address: order.address,
                    phone: order.phone,
                    email: order.email,
                    status: "",
                    gratuity: 0,
                    totalCost: 0,
                    takenByEmployeeId: currentUser.id,
                    deliveredByEmployeeId: null
                }
                createOrder(newOrder).then(() => {
                    navigate('/OrderDetails')
                })
            } else {
                window.alert("Please fill out all details")
            }    }
    }

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