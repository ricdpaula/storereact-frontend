import ProductCard from "./ProductCard";
import { productsArray } from "../api/products"
import Titles from "./Titles";
import { useParams } from "react-router-dom"

const GridProducts = ({category}) => {

    const {type} = useParams()

    return <div className="grid-products w-5/6">
        <div className="grid-products__line flex flex-col justify-center items-center text-center">
        <Titles title={type ?? "Todos os produtos"}/>
            <div className="grid-products__cards flex flex-wrap justify-center item-center">
                {productsArray.filter((current)=>category ? current.type === category : current).map((current, index) => <ProductCard key={`${current.name}${index}`} {...current} />)}
            </div>
        </div>
        <div className="grid-products__line flex flex-col justify-center items-center lg:text-center">
        <Titles title="Mais recentes"/>
            <div className="grid-products__cards flex flex-wrap justify-center item-center">
                {productsArray.slice(-4).reverse().map((current, index) => <ProductCard key={`${current.name}${index}`} {...current} />)}
            </div>
        </div>
    </div>
}

export default GridProducts