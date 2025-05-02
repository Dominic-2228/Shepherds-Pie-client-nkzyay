export const getOrders = () => {
  return fetch("http://localhost:8088/orders").then (res => res.json())
}

export const getOrdersWithCustomer = () => {
  return fetch("http://localhost:8088/orders?_expand=customer").then (res => res.json())
}

export const getOrderWithMatchingMonth = () => {
  return fetch("http://localhost:8088/orders")
}