import GridProducts from "../components/GridProducts"
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Stripe from "../components/Stripe"
import Footer from "../components/Footer"
import Categories from "../components/Categories"
import { useParams } from "react-router-dom"

const Home = () => {
    const { type } = useParams()
    
    return <div className="home">
        <Nav />
        <Banner />
        <Stripe />
        <div className="flex flex-row justify-around items-start m-6">
            <Categories />
            <GridProducts category={type ?? ""} />
        </div>
        <Footer />
    </div>
}

export default Home