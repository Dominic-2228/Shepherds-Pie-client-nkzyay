export const createOrder = (order) => {
    return fetch('http://localhost:8088/Order', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(order)
    })
}