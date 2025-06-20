import Logo from "../assets/Logo.png";
import "../styles/colors.css"

export default function Header() {
    const styleList: string = "text-gray-400 hover:text-gray-300 cursor-pointer"
    return (
        <header className="flex flex-row items-center justify-between p-4 mb-1">
            <img src={Logo} alt="Logo" className="absolute left-15" />
            <div className="flex flex-row flex-1 justify-end items-center absolute right-10">
                <ul className="flex flex-row gap-4 m-4">
                    <li className={styleList}>Home</li>
                    <li className={styleList}>Features</li>
                    <li className={styleList}>Community</li>
                    <li className={styleList}>Blog</li>
                    <li className={styleList}>Pricing</li>
                </ul>
                <button className="primary rounded hover:bg-green-900 cursor-pointer p-1">
                    Register Now →
                </button>
            </div>
        </header>
    )
}