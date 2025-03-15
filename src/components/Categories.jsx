import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { productsArray } from "../api/products"

const Categories = () => {

    const categories = productsArray.map((current)=>current.type)
    const removeDuplicate = Array.from(new Set(categories))
    
    return <aside className="categories hidden lg:flex flex-col bg-white h-fit w-1/4 p-3">
        <h2 className="text-2xl font-bold mb-3">Categorias</h2>
        <ul>
            <Link to="/"><p className="categories__types py-2"><FontAwesomeIcon className="mr-2" icon={faChevronRight}/>Todos</p></Link>
            {removeDuplicate.map((current, index)=><Link key={`${current}-${index}`} to={`/${current}`}><p className="categories__types py-2"><FontAwesomeIcon className="mr-2" icon={faChevronRight}/>{current}</p></Link>)}
        </ul>
    </aside>
}

export default Categories