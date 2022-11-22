export const productListAPI = async () => {
    const data = await (await fetch("http://localhost:5000/api/products")).json()
    return data
  }