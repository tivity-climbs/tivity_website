import Image from 'next/image';

import DownloadSection from "@/components/DownloadSection";
import Head from 'next/head';
import appMockup from '../../public/3.png';
import appMockup2 from '../../public/2.png';
import apple from '../../public/apple.svg';
import google from '../../public/google.svg';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-white min-h-screen w-screen">
        <Header />
        <DownloadSection />
        <div className="flex flex-col items-center  bg-secondary w-full h-full">
          <div className="h-5"></div>
          <h1 className="text-3xl font-poppins font-bold text-black">Welcome to Tivity</h1>
          <div className="h-2"></div>
          <h1 className="text-xl font-poppins font-bold text-black">Find betas videos for climbs at your gym</h1>
          <div className="h-10"></div>

          <Image
            src={appMockup}
            alt="App Mockup"
            className="w-full h-auto max-w-xs"
          />
          <div className="h-5"></div>

          <div className="h-1 w-2/3 border-t-white border-t-2"></div>
          <div className="h-5"></div>
          <h1 className="text-3xl font-poppins font-bold text-black">Follow Friends</h1>
          <div className="h-2"></div>
          <h1 className="text-xl font-poppins font-bold text-black">Find betas videos for climbs at your gym</h1>
          <div className="h-10"></div>
          <Image
            src={appMockup2}
            alt="App Mockup"
            className="w-full h-auto max-w-xs"
          />
          <div className="h-5"></div>

          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="inline-block">
              <Image src={apple} alt="Download on the App Store" width={300} height={200} />
            </a>
            <a href="#" className="inline-block">
              <Image src={google} alt="Get it on Google Play" width={330} height={200} />
            </a>
          </div>
          <div className="h-5"></div>
          <div className="flex items-center justify-center">
            <a href="mailto:owner@tivity.app" className="inline-block">
              <h1 className="text-black">Contact Us</h1>
            </a>
            <div className="w-2"></div>
            <h1 className="text-black">|</h1>
            <div className="w-2"></div>
            <a href="/terms" className="inline-block">
              <h1 className="text-black">Terms of Service</h1>
            </a>
            <div className="w-2"></div>
            <h1 className="text-black">|</h1>
            <div className="w-2"></div>
            <h1 className="text-black">Made with ❤️ from Seattle </h1>

          </div>
          <div className="h-2"></div>
        </div>

      </div >
    </>

  );
}
