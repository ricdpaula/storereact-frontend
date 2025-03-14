const DeliveryTaxTable = () => {
    return <table className="border-1 text-center mt-6">
        <thead>
            <tr>
                <td className="border-1 p-1 font-bold">Valor</td>
                <td className="border-1 p-1 font-bold">Transportadora</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border-1 p-1">R$16,00</td>
                <td className="border-1 p-1">Sedex</td>
            </tr>
            <tr>
                <td className="border-1 p-1">R$18,00</td>
                <td className="border-1 p-1">JadLog</td>
            </tr>
            <tr>
                <td className="border-1 p-1">Grátis</td>
                <td className="border-1 p-1">Retirada no local</td>
            </tr>
        </tbody>
    </table>
}

export default DeliveryTaxTable