import Icon1 from "../assets/Community/Icon1.png"
import Icon2 from "../assets/Community/Icon1.png"
import Icon3 from "../assets/Community/Icon1.png"
import { h1Class, pClass } from "../constans"

export default function Community() {
    const divAlign: string = "flex flex-col items-center justify-center m-15 mx-30"

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h1 className={h1Class}>Manage your entire community<br/> in a single system</h1>
            <p className={pClass}>Who is Nextcent suitable for?</p>
            <div className="flex flex-row items-center justify-between w-full">
                <div className={divAlign}>
                    <img src={Icon1} alt="icon1" className="m-2" />
                    <h1 className={h1Class}>Membership <br/> Organization</h1>
                    <p className={pClass}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className={divAlign}>
                    <img src={Icon2} alt="icon2" className="m-2" />
                    <h1 className={h1Class}>National <br/> Associations</h1>
                    <p className={pClass}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className={divAlign}>
                    <img src={Icon3} alt="icon3" className="m-2" />
                    <h1 className={h1Class}>Clubs And <br/> Groups</h1>
                    <p className={pClass}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    )
}