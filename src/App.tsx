import Header from "./components/Header"
import Hero from "./components/Hero"


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100">
      <Header />
      <Hero />
    </div>
  )
}