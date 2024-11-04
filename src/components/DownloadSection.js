import Image from 'next/image';
import apple from '../../public/apple.svg';
import google from '../../public/google.svg';
import appMockup from '../../public/1.png';

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-start px-6 lg:px-20  text-black max-w-7xl mx-auto ">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl lg:text-4xl mb-4 font-poppins font-bold">
                    Find your <span className="text-primary">next</span> climb
                </h1>
                <h1 className="text-2xl lg:text-4xl font-bold mb-4 font-poppins">
                    Discover <span className="text-primary">new betas</span>
                </h1>
                <h1 className="text-2xl lg:text-4xl font-bold mb-4 font-poppins">
                    Compete with <span className="text-primary">friends</span>
                </h1>
                <h1 className="text-md lg:text-lg font-poppins font-bold">
                    DOWNLOAD NOW ON THE <span className="text-primary">APP STORE</span> AND <span className="text-primary">PLAY STORE</span>
                </h1>
                <div className="h-4 w-4"></div>
                <div className="flex justify-center lg:justify-start space-x-4">
                    <a href="#" className="inline-block">
                        <Image src={apple} alt="Download on the App Store" width={150} height={50} />
                    </a>
                    <a href="#" className="inline-block">
                        <Image src={google} alt="Get it on Google Play" width={170} height={50} />
                    </a>
                </div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
                <Image
                    src={appMockup}
                    alt="App Mockup"
                    className="w-full h-auto max-w-xs"
                />
            </div>
        </div >
    );
}