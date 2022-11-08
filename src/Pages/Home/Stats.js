import React from 'react';

const Stats = () => {
    return (
        <div>
            <h3 className='text-3xl text-center text-primary font-bold'>Our involvement so far</h3>
            <div className='flex justify-center'>
                <div className="stats stats-vertical lg:stats-horizontal bg-base-200 shadow pb-20 w-full m-16">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title text-black">Total People Helped </div>
                        <div className="stat-value text-black">31K</div>
                        <div className="stat-desc text-black">Jan 1st - September 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title text-black">Families Served</div>
                        <div className="stat-value text-black">4,200</div>
                        <div className="stat-desc text-black">↗︎ 400 (22% higher than last month)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Donation Campains</div>
                        <div className="stat-value">120</div>
                        <div className="stat-desc">↗︎ 90 (14%)</div>
                    </div>

                </div>

            </div>
            <div className='flex justify-center'>
                <div className="card w-3/4 bg-base-200 text-black mt-[-120px] shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Do you have any questions ?</h2>
                        <p className='text-xl'>Feel free to ask our support team. We are available 24 hours, everyday</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Stats;