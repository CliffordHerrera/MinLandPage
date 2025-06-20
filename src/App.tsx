import Header from "./components/Header"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import Community from "./components/Community"
//import Unlock from "./components/Body/Unlock"
//import Achievements from "./components/Body/Achievements"
import Body from "./components/Body/Body"


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100">
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Body />
    </div>
  )
}

//<Achievements />