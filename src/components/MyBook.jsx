import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import cover from '../images/cover.png';
import UrbanRenewed from '../Projects/UrbanRenewed';

// eslint-disable-next-line react/display-name
const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-slate-100" ref={ref}>
            <p className="p-4">{props.children}</p>
        </div>
    );
});

const Cover = {
    backgroundImage: `url(${cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
};

function MyBook() {
    const navigate = useNavigate();

    const handleConnectClick = () => {
        navigate('/contact');
    };

    return (
        <div className="flex justify-center items-center h-screen p-4">
            <HTMLFlipBook 
                width={400} 
                height={510} 
                showCover={true} 
                className="w-full max-w-md h-auto"
            >
                {/* Cover Page */}
                <div className="demoPage" style={Cover}>
                    <div style={Cover} className="rounded-lg shadow-xl flex flex-col items-center justify-center h-full p-4">
                    </div>
                </div>

                {/* Page 2 - Urban Renewed */}
                <Page number={2}>
                    <div className="demoPage p-4">
                        <UrbanRenewed />
                    </div>
                </Page>

                {/* Page 3 */}
                <Page number={3}>
                    <div className="demoPage p-4">
                        <h2 className="text-2xl font-semibold">Page 3</h2>
                        <p className="mt-2">This page can showcase additional information.</p>
                    </div>
                </Page>

                {/* Close Page */}
                <div className="demoPage bg-indigo-500 flex items-center justify-center h-full p-6">
                    <button
                        className="bg-green-600 text-white text-center text-2xl py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
                        onClick={handleConnectClick}
                    >
                        Connect with Me
                    </button>
                </div>
            </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
