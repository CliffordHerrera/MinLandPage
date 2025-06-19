import rafiki from "../../assets/Body/rafiki.png"
import { h1Class, pClass } from "../constans"

export default function Unlock() {
    return (
        <div className="flex flex-row items-center justify-between">
            <img src={rafiki} alt="raf" />
            <div className="flex flex-col items-start justify-evenly">
                <h1 className={h1Class}></h1>
                <p className={pClass}></p>
                <button>

                </button>
            </div>
        </div>
    )
}