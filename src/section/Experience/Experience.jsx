import { experiences } from "../../../utils/data/experience";
import ExpCard from "./Exp-card.jsx";

export const ExperienceSection = () => {
    return (
        <div id="Experience" className="relative z-50 my-12 lg:my-24">
            <div className="sticky top-10">
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1e293b] w-max lg:px-10 px-4 py-3 rounded-md lg:text-xl text-md text-white ">
                        Experience
                    </span>
                    <span style={{ background: "linear-gradient(90deg, #22d3ee, #2563eb, #a3e635" }} className="w-full h-[2px] "></span>
                </div>
            </div>

            <div className="pt-24">
                <div className="flex flex-col gap-6">
                    {experiences.map((experience, index) => (
                        <div key={index}
                            id={`sticky-card-${index + 1}`}
                            className="sticky-card w-full mx-auto max-w-2xl sticky"
                        >
                            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                                <ExpCard exp={experience} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;