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

