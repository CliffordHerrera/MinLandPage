import rafiki from "../../assets/Body/rafiki.png"
import { h1ClassNC, pClassNC, btnClass } from "../../constans"

export default function Unlock() {
    return (
        <div className="flex flex-row items-center justify-between">
            <img src={rafiki} alt="raf" className="w-xl" />
            <div className="flex flex-col items-start justify-evenly">
                <h1 className={h1ClassNC}>The unseen of spending three years at Pixelgrade</h1>
                <p className={pClassNC}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.<br/> Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className={btnClass}>
                    Learn More
                </button>
            </div>
        </div>
    )
}