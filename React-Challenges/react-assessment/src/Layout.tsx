import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (

        <>
        <div className="flex flex-col items-center justify-center pb-5">
            <nav className="flex gap-4">
                
                {/* //Challenge-1 */}
                <Link to="/counter" className="text-blue-500 hover:underline">Counter</Link>
                {/* //Challenge-2 */}
                <Link to="/home" className="text-blue-500 hover:underline">Home</Link>
                <Link to="/about" className="text-blue-500 hover:underline">About</Link>
                {/* //Challenge-3 */}
                <Link to="/redux-counter" className="text-blue-500 hover:underline">Redux Counter</Link>
                {/* //Challenge-4 & 5 */}
                {/* for task 5 see the console log in the browser where we can see the inteceptors with headers */}
                <Link to="/fetch-posts" className="text-blue-500 hover:underline">Fetch Posts</Link>
                
                
                {/* //Challenge-6 */}
                <Link to="/basic-form" className="text-blue-500 hover:underline">Basic Form</Link>
                {/* //Challenge-7 */}
                <Link to="/toggle-paragraph" className="text-blue-500 hover:underline">Toggle Paragraph</Link>
                {/* //Challenge-8 */}
                <Link to="/todo" className="text-blue-500 hover:underline">Todo Page</Link>
                {/* //Challenge-9 */}
                <Link to="/reset-form" className="text-blue-500 hover:underline">Reset Form</Link>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}