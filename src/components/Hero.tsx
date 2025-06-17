import Switcher from "./UI/Switcher"

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-between p-24 bg-gradient-to-r from-gray-200 to-gray-300 w-full max-h-99">
            <div className="flex flex-row items-center justify-between w-full mb-20">
                <div className="flex flex-col items-start">
                    <h1 className="text-4xl font-semibold">Lessons and insights <br />
                        <span className="text-green-600">from 8 years</span></h1>
                    <p className="font-regular text-gray-500">Where to grow your business as a photographer: site or social media?</p>
                    <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded cursor-pointer">
                        Register
                    </button>
                </div>
                <img src="../assets/Illustration.png" alt="illustration" />
            </div>
            <Switcher />
        </section>
    )
}