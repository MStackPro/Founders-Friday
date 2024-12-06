import React from 'react'
import { Button } from './ui/button';
import Image from "next/legacy/image";
import ArrowIcon from "../public/Rightarrow.svg";
import Logo from "../public/logo3.svg";


const CallToActionSection = () => {
    return (
      <section className="py-12 border-t border-primaryLight/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <figure className='pb-8'>
                <Image src={Logo} alt='logo' width={100} height={100}/>
            </figure>
          <div className="text-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 w-[60%] mx-auto">
              Want To Be A Part Of Abuja&apos;s Biggest Tech Community?
            </h2>
            {/* Button */}
            <Button
                variant="outline"
                className="mt-6 rounded-full text-[1.2rem] py-5 mb-2"
              >
                Register For Our Next Event
                <Image
                  src={ArrowIcon}
                  alt="arrow icon"
                  width={30}
                  height={30}
                />
              </Button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToActionSection;
  
