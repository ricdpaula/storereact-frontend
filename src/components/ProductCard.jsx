import { Link } from "react-router-dom"


const ProductCard = ({ name, price, image, _id }) => {
    function priceFormat(price) {
        const strPrice = price.toFixed(2).toString();
        const dotReplace = strPrice.replace(".", ",")
        return dotReplace
    }
    return <Link to={`/product/${_id}`}>
        <div className="product-card flex flex-col justify-center text-left p-6 m-2 w-50 h-auto bg-white">
            <div className="product-card__img h-40 w-full" style={{ "backgroundImage": `url(${image})`, "backgroundSize": "contain", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}></div>
            <h3 className="text-1xl mt-3 truncate">{name}</h3>
            <p className="text-2xl text-blue-600 font-bold">R${priceFormat(price)}</p>
            <small>Ou em até 12x de {priceFormat(price / 12)} sem juros</small>
        </div>
    </Link>
}
export default ProductCard