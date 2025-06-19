import Logo1 from "../assets/ClientsLogos/Logo1.png"
import Logo2 from "../assets/ClientsLogos/Logo2.png"
import Logo3 from "../assets/ClientsLogos/Logo3.png"
import Logo4 from "../assets/ClientsLogos/Logo4.png"
import Logo5 from "../assets/ClientsLogos/Logo5.png"
import Logo6 from "../assets/ClientsLogos/Logo6.png"
import Logo7 from "../assets/ClientsLogos/Logo7.png"
import { h1Class, pClass } from "../constans"

export default function Clients() {
    const images: string[] = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={h1Class}>Our Clients</h1>
            <p className={pClass}>We have been working with some Fortune 500+ clients</p>
            <div className="flex flex-row items-center justify-between w-full">
                {
                    images.map((logo) => {
                        return (
                            <img src={logo} alt={logo} className="m-10" />
                        )
                    })
                }
            </div>
        </div>
    )
}
