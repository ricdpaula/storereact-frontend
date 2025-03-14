import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Footer = () => {
    return <footer className="flex flex-col justify-center items-center bg-black text-white static left-0 bottom-0 w-full">
        <div className="flex flex-col lg:flex-row mt-12">
            <Link to="/">
                <div className="flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faShopify} className="text-3xl mr-2" />
                    <h1 className="nav__logo lg:text-3xl">Store<b>React</b></h1>
                </div>
            </Link>
        </div>
        <small className="py-12">Todos os direitos reservado &copy; 2025</small>
    </footer>
}

export default Footer