import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

const CheckoutItems = ({_id, image, name, price}) => {
    const cart= localStorage.getItem("cart") || "{}";
    const cartArray = JSON.parse(cart);

    const deleteItem = () => {
        const deleteItem = cartArray.filter((current)=>current._id!==_id)
        localStorage.setItem("cart", JSON.stringify(deleteItem))
        window.location.reload()
    }

    return <tr className="checkout-items border-b-1 border-stone-400 lg:border-b-0">
        <th className="font-normal py-4"><Link to={`/product/${_id}`}>
        <div className="product__img lg:h-20 lg:h-20 h-50 w-50 mx-8" style={{ "backgroundImage": `url(${image})`, "backgroundSize": "contain", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}></div></Link></th>
        <th className="font-normal py-4"><p className="">{name}</p></th>
        <th className="font-normal py-4"><input className="w-12 border-1" type="number" defaultValue={1}/></th>
        <th className="py-4 text-1xl">{price}</th>
        <th onClick={deleteItem} className="font-normal py-4"><FontAwesomeIcon icon={faTrashAlt} /></th>
    </tr>
}

export default CheckoutItems