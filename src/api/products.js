import axios from 'axios'

const url = "https://storereact-backend.vercel.app/products"

const responseProducts = await axios.get(url)

export const productsArray = responseProducts.data