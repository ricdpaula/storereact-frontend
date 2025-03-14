import CheckoutItems from "../components/CheckoutItems";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Checkout = () => {
    const cart = localStorage.getItem("cart") || "{}";
    const cartArray = JSON.parse(cart);

    const totalCheckout = () => {
        let total = 0
        for (let i = 0; i < cartArray.length; i++) {
            total = total + cartArray[i].price;
        }

        return total
    }

    function priceFormat(price) {
        const strPrice = price.toFixed(2).toString();
        const dotReplace = strPrice.replace(".", ",")
        return dotReplace
    }

    return <>
        <Nav />
        <div className="checkout flex flex-col justify-start items-center my-6 h-svh">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">Carrinho</h2>
            <div className="block overflow-auto w-3/4">
                <table className="table w-full">
                    <thead className="bg-blue-600 text-white">
                        <tr className="lg:contents hidden">
                            <th className="p-4"></th>
                            <th className="p-4">Nome</th>
                            <th className="p-4">Quantidade</th>
                            <th className="p-4">Preço</th>
                            <th className="p-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {cartArray ? cartArray.map((current, index) => {
                            return <CheckoutItems key={`${current._id}${index}`} {...current} />
                        }) : <></>}
                    </tbody>
                </table>
            </div>
            <div className="flex bg-black text-white p-5 w-3/4 mt-3 justify-end">
                <p className="font-normal">Valor total: <b>R${priceFormat(totalCheckout())}</b></p>
            </div>
            <div className="flex p-5 w-full mt-3 justify-center">
                <Link to="/">
                    <button className="font-bold p-5 bg-orange-600 text-white">Finalizar pedido</button>
                </Link>
            </div>
        </div>
        <Footer />
    </>
}

export default Checkout