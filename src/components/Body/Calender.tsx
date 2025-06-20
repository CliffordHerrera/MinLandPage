import { h1ClassNC, pClassNC, btnClass } from "../../constans"
import pana from "../../assets/Calender/pana.png"

export default function Calender() {
    return (
        <div className="flex flex-row items-center justify-between p-4">
            <img src={pana} alt="huy" />
            <div className="flex flex-col items-start justify-center">
                <h1 className={h1ClassNC}>How to design your site footer like we did</h1>
                <p className={pClassNC}>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className={btnClass}>
                    Learn More
                </button>
            </div>
        </div>
    )
}