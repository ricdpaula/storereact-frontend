import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const Nav = () => {
    const cart = localStorage.getItem("cart") || "{}";
    const cartArray = JSON.parse(cart);
    const checkoutLength = cartArray.length;

    return <nav className="nav flex flex-row justify-around items-center py-2 bg-blue-600 text-white">
        <Link to="/">
            <div className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faShopify} className="text-3xl mr-2" />
                <h1 className="nav__logo lg:text-3xl">Store<b>React</b></h1>
            </div>
        </Link>
        <Link to={"/checkout"}>
            <div className="nav__items flex flex-row-reverse justify-center items-center">
                <div className="nav__items--badge rounded-full w-5 h-5 bg-red-600 flex justify-center items-center mx-1">
                    <small className="font-bold">{checkoutLength > 0 ? checkoutLength : 0}</small>
                </div>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </Link>
    </nav>
}

export default Nav