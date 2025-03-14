import { faBox, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Stripe = () => {
    return <div className="flex flex-row justify-around items-center py-6 bg-stone-200 flex-wrap text-stone-800">
        <div className="flex flex-col lg:flex-row justify-center items-center my-8 lg:my-0">
            <FontAwesomeIcon className="text-4xl mx-5" icon={faTruck} />
            <div className="text-center lg:text-left">
                <p className="font-bold text-2xl">Frete grátis</p>
                <p className="font-normal text-2xl">para todo Brasil</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center my-8 lg:my-0">
            <FontAwesomeIcon className="text-4xl mx-5" icon={faBox} />
            <div className="text-center lg:text-left">
                <p className="font-bold text-2xl">Produtos</p>
                <p className="font-normal text-2xl">a pronta entrega</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center my-8 lg:my-0">
            <FontAwesomeIcon className="text-4xl mx-5" icon={faCreditCard} />
            <div className="text-center lg:text-left">
                <p className="font-bold text-2xl">Parcelamento</p>
                <p className="font-normal text-2xl">em até 12x sem juros</p>
            </div>
        </div>
    </div>
}

export default Stripe