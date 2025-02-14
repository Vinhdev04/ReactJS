// TODO: call API POST product
export const createProduct = async (option) => {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  });
  const result = await response.json();
  return result;
};
