import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-white text-[35px] font-semibold'>My Projects</h1>
            <div className='flex justify-between items-center'>
                <div className='w-1/2 mb-3'>
                    <p className='border-l-2 border-yellow-300 rounded-tl-[10px] rounded-bl-[10px] pl-4'>
                        Interactively seize orthogonal leadership skills vis-a-vis functionalized methods of empowerment. Compellingly leverage existing superior mindshare before state of the art opportunities. Competently maintain intuitive information after long-term high-impact architectures. Energistically impact top-line methods of empowerment after long-term high-impact communities. Uniquely formulate bricks-and-clicks expertise with synergistic quality vectors.
                    </p>
                    <button
                    className='bg-yellow-300 text-red-500 py-3 border-2 border-yellow-300 px-10 rounded-tl-[20px] rounded-br-[20px] mt-4 hover:bg-transparent hover:border-2 transition-[.5s] hover:border-yellow-300'
                    >Get Start</button>
                </div>
                <div className='w-1/2'>
                    <img src='https://genz-next.vercel.app/assets/imgs/page/homepage1/banner.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Projects;