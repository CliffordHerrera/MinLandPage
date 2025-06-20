import { h1ClassNC, pClassNC } from "../../constans"
import icon1 from "../../assets/Achieves/icon1.png"
import icon2 from "../../assets/Achieves/icon2.png"
import icon3 from "../../assets/Achieves/icon3.png"
import icon4 from "../../assets/Achieves/icon4.png"

export default function Achievements() {
    const divRow: string = "flex flex-row items-center justify-around"
    const divCol: string = "flex flex-col items-start justify-center"
    return (
        <div className="flex flex-row items-center justify-between w-full bg-gray-100">
            <div className="flex flex-col items-center justify-center mx-40">
                <h1 className={h1ClassNC}>Helping a local <br/> <span className="text-green-600">business reinvent itself</span></h1>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-40">
                <div className={divRow}>
                    <img src={icon1} alt="icon1" />
                    <div className={divCol}>
                        <h1 className={h1ClassNC}>2,245,341</h1>
                        <p className={pClassNC}>Members</p>
                    </div>
                </div>
                <div className={divRow}>
                    <img src={icon2} alt="icon1" />
                    <div className={divCol}>
                        <h1 className={h1ClassNC}>46,328</h1>
                        <p className={pClassNC}>Clubs</p>
                    </div>
                </div>
                <div className={divRow}>
                    <img src={icon3} alt="icon1" />
                    <div className={divCol}>
                        <h1 className={h1ClassNC}>828,867</h1>
                        <p className={pClassNC}>Event Bookings</p>
                    </div>
                </div>
                <div className={divRow}>
                    <img src={icon4} alt="icon1" />
                    <div className={divCol}>
                        <h1 className={h1ClassNC}>1,926,436</h1>
                        <p className={pClassNC}>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}