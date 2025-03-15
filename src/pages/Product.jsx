import { useParams } from "react-router-dom";
import { productsArray } from "../api/products"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";
import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import DeliveryTaxTable from "../components/DeliveryTaxTable";
import Modal from "../components/Modal";


const Product = () => {
    const { id } = useParams();
    const productObj = productsArray.filter((current) => current._id === id)[0];

    const cart= localStorage.getItem("cart") || "{}";
    const cartArray = JSON.parse(cart);

    function priceFormat(price) {
        const strPrice = price.toFixed(2).toString();
        const dotReplace = strPrice.replace(".", ",")
        return dotReplace
    }

    const [isImageFull, setIsImageFull] = useState(false)

    const imageFull = () => {
        setIsImageFull(true)
    }

    const [isDeliveryTax, setIsDeliveryTax] = useState(false)

    const showDeliveryTax = () => {
        setIsDeliveryTax(true)
    }

    const [isAlert, setIsAlert] = useState(false)

    const [messageAlert, setMessageAlert] = useState("")
    const [colorAlert, setColorAlert] = useState("bg-black")

    const [checkoutLength, setCheckoutLength] = useState(cartArray.length)

    const addCheckout = () => {
        if (cart !== "{}") {
            const cartCurrent = JSON.parse(cart)
            const mapped = cartCurrent.map((current) => current._id)
            if (!mapped.includes(productObj._id)) {
                cartCurrent.push(productObj)
                localStorage.setItem("cart", JSON.stringify(cartCurrent))
                setIsAlert(true)
                setMessageAlert("Adicionado ao carrinho")
                setColorAlert("bg-emerald-100")
                setCheckoutLength(checkoutLength + 1)
            } else {
                setIsAlert(true)
                setMessageAlert("O produto já foi adicionado")
                setColorAlert("bg-red-300")
            }
        } else {
            localStorage.setItem("cart", "[" + JSON.stringify(productObj) + "]")
            setIsAlert(true)
            setMessageAlert("Adicionado ao carrinho")
            setColorAlert("bg-emerald-100")
            setCheckoutLength(checkoutLength + 1)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAlert(false)
        }, 3000)

        return () => clearInterval(timer)
    })

    const [currentImage, setCurrentImage] = useState(productObj.image)

    return <>
        {isImageFull ? <Modal image={currentImage} isImageFull={setIsImageFull} /> : <></>}
        <Nav />
        {isAlert ? <Alert message={messageAlert} color={colorAlert} /> : <></>}
        <div className="product flex flex-col justify-center items-center m-8">
            <div className="product__container flex flex-col lg:flex-row justify-center items-center p-6 bg-white w-3/4 h-fit">
                <div className="flex flex-col w-full p-8">
                    <div onClick={imageFull} className="product__img h-80 w-full mx-8 self-center" style={{ "backgroundImage": `url(${currentImage})`, "backgroundSize": "contain", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}></div>
                    <div className="flex flex-row flex-wrap justify-center items-center mt-6">
                        {productObj.subImages.map((current, index) => <div className="w-12 h-12 mx-2" onClick={() => setCurrentImage(current)} key={`${productObj.sku}-${index}`} style={{ "backgroundImage": `url(${current})`, "backgroundSize": "contain", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}></div>)}
                    </div>
                </div>
                <div className="product__texts flex flex-col text-center lg:text-left mx-8">
                    <h3 className="lg:text-2xl font-bold mt-3">{productObj.name}</h3>
                    <small className="my-2"><b>Código:</b> {productObj.sku}</small>
                    <p className="lg:text-1xl">{productObj.description}</p>
                    <p className="text-4xl text-blue-600 font-bold mt-3">R${priceFormat(productObj.price)}</p>
                    <small>Ou em até 12x de {priceFormat(productObj.price / 12)} sem juros</small>
                    <div onClick={addCheckout} className="w-full lg:w-fit">
                        <button className="py-4 px-6 bg-blue-600 text-2xl rounded-sm text-zinc-50 font-bold mt-3">Comprar agora</button>
                    </div>
                    <label htmlFor="delivery" className="mt-6"><FontAwesomeIcon icon={faTruck} /> Calcular frete:</label>
                    <div className="product__texts--frete">
                        <input className="border-1 border-stone-400 w-40 p-2 mt-1" type="text" name="delivery" id="delivery" placeholder="00000-000" />
                        <button onClick={showDeliveryTax} className="p-2 bg-black text-zinc-50 font-bold mx-2">Calcular</button>
                    </div>
                    {isDeliveryTax ? <DeliveryTaxTable /> : <></>}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Product