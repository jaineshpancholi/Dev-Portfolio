import React from 'react';
import Marquee from "react-fast-marquee";
import { skillsData } from '../../utils/data/skills';


export const Skills = () => {
    return (
        <div id="skills" className="relative z-50 lg:my-24  my-12">
            <div className="sticky top-10">
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1e293b] w-max lg:px-10 px-4 py-3 rounded-md lg:text-xl text-md text-white">
                        Skills
                    </span>
                    <span style={{ background: "linear-gradient(90deg, #22d3ee, #2563eb, #a3e635" }} className="w-full h-[2px] "></span>
                </div>
            </div>


            <div className='w-full my-12'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                    >
                    {skillsData.map((skill, index) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={index}>
                            <div className="h-full w-full rounded-lg bg-[#1e293b] border shadow-none shadow-gray-50 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10">
                                    <img
                                        src="/assets/skills/react.svg"
                                        alt={skill}
                                        width={40}
                                        height={40}
                                        className="h-full w-auto rounded-lg"
                                    />
                                </div>
                                <p className="text-white text-sm sm:text-lg">
                                    {skill}
                                </p>
                            </div>
                        </div>

                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default Skills;