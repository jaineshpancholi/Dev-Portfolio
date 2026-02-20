import { useState } from 'react'
import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/section/Hero";
import { AboutSection } from './section/About';
import ExperienceSection from './section/Experience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar/>
      <main>
        <Hero/>
        <AboutSection/>
        <ExperienceSection/>
      </main>
    </div>
  )
}

export default App
