const Alert = ({message, color}) => {
    return <div className={`alert flex justify-center items-center text-black text-1xl p-3 ${color}`}>
        {message}
    </div>
}

export default Alert