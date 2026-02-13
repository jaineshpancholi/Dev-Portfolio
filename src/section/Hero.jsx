import { personalData } from "../../utils/data/personal-data";

export const Hero = () => {
    return (
        <section className="relative flex items-center overflow-hidden justify-between">
            {/* background image */}
            <div className="inset-0 h-[70vh]">
                <img src="/image/c1.jpg"
                    alt="hero image"
                    className="absolute -top-[98px] -z-10">
                </img>
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
            </div>



            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 ">
                    <h1 className="text-4xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        Hey There, <br />
                        I am <span className="text-[#2563eb]">Jainesh Pancholi</span> <br />
                        <span className="text-[#2563eb]">Full Stack Developer</span> <br />

                    </h1>
                    <div className="my-12 flex items-center gap-5">

                    </div>

                </div>
                {/* right column - text content */}
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
};