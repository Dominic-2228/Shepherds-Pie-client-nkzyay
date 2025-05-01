export const getAllEmployees = () => {
  return fetch("http://localhost:8088/Employee").then((res) => res.json());
};

export const postEditedEmployee = (employeeObj) => {
  return fetch(`http://localhost:8088/Employee/${employeeObj.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(employeeObj),
  }).then((res) => res.json());
};
