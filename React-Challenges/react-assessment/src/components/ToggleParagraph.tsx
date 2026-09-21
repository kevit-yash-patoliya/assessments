import { useState } from "react";

export default function ToggleParagraph() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)} className="bg-blue-500 text-white ">
                {isVisible ? "Hide" : "Show"} Paragraph
            </button>
            {isVisible && <p>Toggle paragraph</p>}
        </div>
    );
}