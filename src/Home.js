import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h1 className="text-2xl">Demo React</h1>
            <p className="mt-4">This is a demo app to explore React. You can find some of the included links below.</p>
            <div className="mt-2">
                <ul className="list-disc px-4">
                    <li className=""><Link to="/timeline">Timeline: a dynamic timeline demo</Link></li>
                </ul>
            </div>
        </div>
    );
}