import { useState } from "react";

export default function Switcher() {
    const activeBtn: string = "bg-green-700 rounded-full w-2 h-2 m-2";
    const inactiveBtn: string = "bg-green-400 rounded-full w-2 h-2 m-2"
    const [active, setActive] = useState<number>(1);

    return (
        <div className="flex flex-row items-center justify-center mb-0 mt-14">
            <button onClick={() => setActive(1)} className={active === 1 ? activeBtn : inactiveBtn}></button>
            <button onClick={() => setActive(2)} className={active === 2 ? activeBtn : inactiveBtn} ></button>
            <button onClick={() => setActive(3)} className={active === 3 ? activeBtn : inactiveBtn}></button>
        </div>
    );
}