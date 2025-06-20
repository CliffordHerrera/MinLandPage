import Achievements from "./Achievements";
import Calender from "./Calender";
import Unlock from "./Unlock";


export default function Body() {
    return (
        <body className="flex flex-col items-center justify-center w-full">
            <Unlock />
            <Achievements />
            <Calender />
            
        </body>
    );
}