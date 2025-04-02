import { useState, useEffect, useRef } from "react";

const stepCount = 5;

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Step({ index, title, stepText, timelineIndex }) {
    const modIndex = ((timelineIndex % stepCount) + stepCount) % stepCount;
    const isCompleted = index < modIndex;
    const isActive = index === modIndex;
    return (
        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success">
            <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                <span className={classNames("shadow-lg shadow-blue-500/50 transition-all duration-500 flex justify-center items-center shrink-0 font-medium rounded-full",
                    isActive || isCompleted ? "text-white bg-blue-600" : "bg-gray-200",
                    isActive ? "size-10" : "size-7")}>
                    <span className={classNames(isCompleted ? "hidden" : "")}>{stepText}</span>
                    <svg className={classNames(isCompleted ? "shrink-0 size-3" : "hidden shrink-0 size-3")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                <span className="ms-2 text-sm font-medium text-gray-800">
                    {title}
                </span>
            </span>
            <div className={classNames("w-full h-px flex-1 group-last:hidden", isCompleted ? "bg-blue-600" : "bg-gray-200")}></div>
        </li>);
}

function PCRStepper({ timelineIndex }) {
    return (
        <div className="">
            <ul className="min-h-10 relative flex flex-row gap-x-2">
                <Step index={0} title={"Molecular Collected"} stepText={"1"} timelineIndex={timelineIndex} />
                <Step index={1} title={"Received"} stepText={"2"} timelineIndex={timelineIndex} />
                <Step index={2} title={"Resulted"} stepText={"3"} timelineIndex={timelineIndex} />
                <Step index={3} title={"Done"} stepText={"-"} timelineIndex={timelineIndex} />
                <Step index={4} title={"Done"} stepText={"-"} timelineIndex={timelineIndex} />
            </ul>
        </div>
    );
}

function OtherStepper({ timelineIndex }) {
    return (
        <div>
            <ul className="min-h-10 relative flex flex-row gap-x-2">
                <Step index={0} title={"Other Collected"} stepText={"1"} timelineIndex={timelineIndex} />
                <Step index={1} title={"Received"} stepText={"2"} timelineIndex={timelineIndex} />
                <Step index={2} title={"In Progress"} stepText={"3"} timelineIndex={timelineIndex} />
                <Step index={3} title={"24 Hours"} stepText={"4"} timelineIndex={timelineIndex} />
                <Step index={4} title={"48 Hours+"} stepText={"5"} timelineIndex={timelineIndex} />
            </ul>
        </div>
    );
}

function StepperContent({ timelineIndex }) {
    const modIndex = ((timelineIndex % stepCount) + stepCount) % stepCount;
    return (
        < div className="mt-5 sm:mt-8" >
            <div>
                <div className={classNames("p-4 h-48 bg-gray-900 flex justify-center items-center border border-gray-200 rounded-xl bg-[url('./assets/lablens/content-bg-1.png')] bg-contain bg-right bg-no-repeat",
                    modIndex === 0 ? "animate-fadeIn" : "hidden")}>
                    <p className="text-gray-100 text-2xl">
                        The samples are collected and sent to the lab for testing.
                    </p>
                </div>
            </div>
            <div>
                <div className={classNames("p-4 h-48 bg-gray-50 flex justify-center items-center border border-gray-200 rounded-xl bg-[url('./assets/lablens/content-bg-1.png')] bg-contain bg-right bg-no-repeat",
                    modIndex === 1 ? "animate-fadeIn" : "hidden")}>
                    <p className="text-gray-600 text-2xl">
                        The lab receives the samples and begins processing them.
                    </p>
                </div>
            </div>
            <div>
                <div className={classNames("p-4 h-48 bg-white flex justify-center items-center border border-gray-200 rounded-xl bg-[url('./assets/lablens/content-bg-2.png')] bg-contain bg-right bg-no-repeat",
                    modIndex === 2 ? "animate-fadeIn" : "hidden")}>
                    <p className="text-gray-600 text-2xl max-w-xl">
                        The molecular results are completed ussually within 24 hours. While the other results take longer.
                    </p>
                </div>
            </div>
            <div>
                <div className={classNames("p-4 h-48 bg-gray-50 flex justify-center items-center border border-gray-200 rounded-xl bg-[url('./assets/lablens/content-bg-3.png')] bg-contain bg-right bg-no-repeat",
                    modIndex === 3 ? "animate-fadeIn" : "hidden")}>
                    <p className="text-gray-600 text-2xl max-w-xl">
                        The providers receive a comprehensive molecular report to help them make informed decisions.
                    </p>
                </div>
            </div>
            <div>
                <div className={classNames("p-4 h-48 bg-[#2b3cf5] flex justify-center items-center border border-gray-200 rounded-xl bg-[url('./assets/lablens/content-bg-4.png')] bg-contain bg-right bg-no-repeat",
                    modIndex === 4 ? "animate-fadeIn" : "hidden")}>
                    <p className="text-white text-2xl max-w-xl">
                        The microbiology and other traditional results ussually take 48 hours+ to be completed.
                    </p>
                </div>
            </div>
        </div >

    );
}

function NavigationBar({ timelineIndex, setTimelineIndex }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [speed, setSpeed] = useState(5000);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() =>
                setTimelineIndex(prevCount => prevCount + 1),
                speed);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPlaying, setTimelineIndex, speed]);

    const toggleRunning = () => {
        setIsPlaying(prev => !prev);
    };

    const handleSpeedChange = (event) => {
        setSpeed(event.target.value);
    };

    return (
        <div className="mt-5 flex justify-center gap-x-2">
            <button type="button" onClick={() => setTimelineIndex(prev => prev - 1)}
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                </svg>
                Back
            </button>
            <button type="button" onClick={() => toggleRunning()} className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                {isPlaying ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                }
            </button>
            <button type="button" onClick={() => setTimelineIndex(prev => prev + 1)}
                className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                Next
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </button>
            <select className="py-3 px-4" value={speed} onChange={handleSpeedChange}>
                <option value="10000">Slow</option>
                <option value="5000" selected>Normal</option>
                <option value="2000">Fast</option>
            </select>
        </div>
    );
}

