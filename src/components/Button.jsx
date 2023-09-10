const Button = ({label, iconURL}) => {
  return (
    <button
    className=" flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border-2 rounded-full border-coral-red hover:bg-orange-500 hover:text-white">
        {label}
        {iconURL &&
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"></img>}
    </button>
  )
}

export default Button