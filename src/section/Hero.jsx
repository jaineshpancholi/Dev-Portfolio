import { personalData } from "../../utils/data/personal-data";

export const Hero = () => {
    return (
        <section className="relative lg:h-[70vh]  flex flex-col items-center overflow-hidden pt-24">
            {/* background image */}
            <img src="/image/c1.jpg"
                alt="hero image"
                className="absolute inset-0 w-full h-full object-cover -z-10">
            </img>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
            {/* content */}
            <div className="relative container z-10 mx-auto grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 ">
                {/* left column - text content */}
                <div className="order-2 lg:order-1 flex flex-col  justify-center p-2 pb-20 md:pb-10 lg:pt-10 ">
                    <h1 className="text-4xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        Hey There, <br />
                        I am <span className="text-[#2563eb]">{personalData.name}</span> <br />
                        I <span className="text-[#2563eb]">{personalData.designation}</span> <br />

                    </h1>
                    <div className="my-12 flex items-center gap-5">
                        <a className="transition-all text-[#0a66c2] hover:scale-125 duration-300" href={personalData.github} target="_blank" aria-label="GitHub">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" width="32"
                                height="32" />
                        </a>
                        <a className="transition-all text-[#0a66c2] hover:scale-125 duration-300" href={personalData.linkedIn} target="_blank"
                            aria-label="LinkedIn">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32"
                                height="32" />
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <a><button className="px-3 md:px-8 py-3 md:py-4 rounded-full border-none text-center md:font-semibold px-3 text-sm uppercase bg-[#0A6FFD] hover:bg-[#1d4ed8] flex gap-1 hover:gap-3 duration-200 font-medium text-white ">Contact me</button></a>
                    </div>

                </div>
                {/* right column - text content */}
                <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">{personalData.name}</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Python</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">C#</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">AWS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Javascript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">MySql</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Node.js</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Docker</span>

                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">hardworker:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">quicklearner:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">problemsolver:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">{`() {`}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24  text-cyan-400">this.</span>
                                <span className="text-white mr-2">hardworker</span>
                                <span className="text-amber-400">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24  text-cyan-400">this.</span>
                                <span className="text-white mr-2">problemSolver</span>
                                <span className="text-amber-400">&amp;&amp;</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24  text-cyan-400">this.</span>
                                <span className="text-white ">skills.</span>
                                <span className="text-white mr-2">length</span>
                                <span className="text-amber-400 mr-2">&gt;=</span>
                                <span className="text-orange-400">5</span>
                            </div>
                            <div><span className="text-gray-400 ml-8 lg:ml-16">{`);`}</span></div>
                            <div><span className="text-gray-400 ml-4 lg:ml-8">{`};`}</span></div>
                            <div><span className="text-gray-400 ">{`};`}</span></div>

                        </code>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};