const Modal = ({image, isImageFull}) => {

    const closeModal = () => {
       isImageFull(false)
    }
    return <div onClick={closeModal} className="modal flex justify-center items-center fixed bg-black/50 h-svh w-full">
        <div className="w-100 h-100" style={{ "backgroundImage": `url(${image})`, "backgroundSize": "contain", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}></div>
    </div>
}

export default Modal