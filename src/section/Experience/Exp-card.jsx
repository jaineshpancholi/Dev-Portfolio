import * as React from 'react';


function ExpCard({ exp }) {
    return (
        <div className="bg-[#1e293b] rounded-lg relative border-[#1b2c68a0]">
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                <div className="flex items-center space-x-2">
                    <img src="src/assets/svg/edu/sigma.png"
                        alt="Company Logo"
                        className="rounded-full"
                        width={50}
                        height={50}>
                    </img>
                    <p className="text-center ml-3 text-[#fff] text-base lg:text-xl">
                        {exp.company}
                    </p>
                </div>
            </div>

            <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8'>
                <code className='font-mono text-xs md:text-sm lg:text-base'>
                    <div className='blink'>
                        <span className='text-pink-500 mr-2'>const</span>
                        <span className='text-white mr-2'> job</span>
                        <span className='text-pink-500 mr-2'>=</span>
                        <span className='text-gray-400'>{'{'}</span>
                    </div>
                    <div>
                        <span className='text-white ml-8 mr-2'>Role:</span>
                        <span className='text-orange-400'>{exp.title}</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div>
                        <span className='text-white ml-8 mr-2'>Duration:</span>
                        <span className='text-orange-400'>{exp.duration}</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div className='ml-4 lg:ml-8 mr-2'>
                        <span className='text-white'>Tools:</span>
                        <span className='text-gray-400'>{`['`}</span>
                        {
                        exp.tools.map((tag, index) => (
                            <React.Fragment key={index}>
                            <span className='text-amber-300'>{tag}</span>
                            {
                                exp.tools?.length - 1 !== index && 
                                <span className='text-gray-400'>{`','`}</span>
                            }
                            </React.Fragment>
                        ))
                        }
                        <span className='text-gray-400'>{'],'}</span>
                    </div>
                    <div className='ml-4 lg:ml-8 mr-2'>
                        <span className='text-white mr-2'>Description:</span>
                        <span className='text-cyan-400'>{exp.description}</span>
                    </div>
                    <div><span className="text-gray-400">{`};`}</span></div>


                </code>

            </div>

        </div>
    );
};

export default ExpCard;