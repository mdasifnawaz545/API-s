function Button({ buttonName = "Button", className }) {
    return (
        <button className={`bg-green-500 px-2 p-1 rounded-lg outline-none hover:shadow-md duration-100 ${className}`}>{buttonName}</button>
    )
}

export default Button;