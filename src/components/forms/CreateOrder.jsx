

const handleSa



return (
    <form className="customer-info">
        <h2>Customer Info</h2>
        <div className="drop-down">
            <article className="pickup-option">
                <select name="pickup-option">
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
        <fieldset>
            <div className="form-group">
                <button onClick={handleSave}>Save Order</button>
            </div>
        </fieldset>
    </form>
) 