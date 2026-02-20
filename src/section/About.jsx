import { personalData } from "../../utils/data/personal-data";

export const AboutSection= () => {
    return (
        <div id="about" className="my-12 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-24 -left-8">
                <span className="text-white bg-[#1e293b] w-fit rotate-270 p-2 px-10 text-xl rounded-md">About Me</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"> 
                <div className="order-2 lg:order-1">
                    <p className="lg:text-xl text-blue-500 mb-5 lg:ml-24 text-md font-bold uppercase ">Who Am I?</p>
                    <p className="lg:ml-24 lg:text-lg text-black text-md text-justify">{personalData.description2}</p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <img src={personalData.profile}
                    height={300}
                    width={370}
                    className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;