export const getOrders = () => {
  return fetch("http://localhost:8088/orders").then((res) => res.json());
};

export const getOrdersWithCustomer = () => {
  return fetch("http://localhost:8088/orders?_expand=customer").then((res) =>
    res.json()
  );
};

export const getOrderWithMatchingMonth = (id) => {
  return fetch(
    `http://localhost:8088/orders?monthId=${id}&_expand=customer`
  ).then((res) => res.json());
};

export const getOrderById = (orderId) => {
  return fetch(
    `http://localhost:8088/orders?id=${orderId}&_expand=customer&_embed=pizzas`
  ).then((res) => res.json());
};
