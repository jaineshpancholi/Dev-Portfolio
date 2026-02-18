import { useState } from 'react'
import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/section/Hero";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App
