"use client";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const inputRef = useRef(null);
  const footerRef = useRef(null);

  const menuData = ["t-shirts", "shirts", "jeans", "trousers", "shorts"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && inputRef.current) {
          inputRef.current.focus();
        }
      },
      {
        threshold: 0.5, // Adjust based on when you want to trigger focus
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      {" "}
      <footer
        ref={footerRef}
        className="bg-[#F4ECD7] font-helvetica-light text-black font-extrabold"
      >
        <div className=" mx-auto mb-10 lg:mb-16 px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-1 font-normal uppercase tracking-wide font-helvetica-medium">
            {menuData.map((item, idx) => (
              <p>{item}</p>
            ))}
          </div>

          <div className="space-y-1 font-normal uppercase tracking-wide font-helvetica-medium">
            <p>About & Contact Us</p>
            <p>Delivery & Returns</p>
            <p>Help & Questions</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="hidden lg:block">
            <p className=" font-bold tracking-wider">
              Sign up now and be the first to know
              <br />
              about exclusive offers.
            </p>
            <form className="mt-4 flex items-center border-b border-black w-full max-w-sm">
              <input
                ref={inputRef}
                type="email"
                placeholder="Enter email address"
                className="w-full bg-transparent focus:outline-none py-1 placeholder-[#a6a6a6] text-black font-normal font-helvetica-medium"
              />
              <button type="submit" className="ml-2 text-black">
                <img
                  src="/assets/icons/arrow-right-2.svg"
                  className="h-8 w-8"
                  alt="arrowRight"
                />
              </button>
            </form>
          </div>

          <div className="hidden lg:block text-right text-sm font-bold">
            <p className="tracking-wider font-helvetica-medium">
              THRIFT HAPPENS
            </p>
            <h1 className="font-ponjoung tracking-widest font-extrabold text-[#E55100] text-3xl mt-2">
              {" "}
              THRIFTY <br /> THREADS.
            </h1>
          </div>
        </div>
        <div className=" mx-auto  text-[15px]  px-4 py-6  gap-10">
          <div className="lg:hidden">
            <p className=" font-bold tracking-wider">
              Sign up now and be the first to know about exclusive offers.
            </p>
            <form className="mt-4 flex items-center border-b border-black w-full ">
              <input
                type="email"
                placeholder="Enter Email address"
                className="w-full bg-transparent focus:outline-none py-1 placeholder-[#a6a6a6]  text-black"
              />
              <button type="submit" className="ml-2 text-black">
                <img
                  src="/assets/icons/arrow-right-2.svg"
                  className="h-8 w-8"
                  alt="arrowRight"
                />
              </button>
            </form>
          </div>

          <div className="flex justify-end gap-4 items-end border-b pb-1 text-lg  font-extrabold border-black lg:hidden pt-5 ">
            <p className="tracking-wider font-helvetica-medium pb-2">
              THRIFT
              <br />
              HAPPENS
            </p>
            <h1 className="font-ponjoung tracking-widest font-extrabold text-[#E55100]  text-4xl ">
              THRIFTY <br /> THREADS.
            </h1>
          </div>

          <p className=" lg:hidden pt-5 tracking-wider max-w-md ">
            Thrifty Threads is your go-to online thrift store, offering
            one-of-a-kind pieces, timeless style, and conscious fashion.
          </p>
        </div>

        <div className="flex justify-center lg:hidden gap-4 ">
          <img
            src="/assets/icons/instagram.svg"
            className="h-8 w-8"
            alt="instagram"
          />
          <img
            src="/assets/icons/facebook.svg"
            className="h-8 w-8"
            alt="facebook"
          />
          <img
            src="/assets/icons/youtube.svg"
            className="h-8 w-8"
            alt="youtube"
          />
        </div>

        <div className="lg:text-sm items-end mx-auto tracking-wider px-4 py-6 grid grid-cols-[60%_40%] lg:grid-cols-4  lg:gap-10">
          <p className="text-sm ">2025 © Thrifty Threads.</p>

          <div className="hidden lg:flex gap-4 ">
            <img
              src="/assets/icons/instagram.svg"
              className="h-8 w-8"
              alt="instagram"
            />
            <img
              src="/assets/icons/facebook.svg"
              className="h-8 w-8"
              alt="facebook"
            />
            <img
              src="/assets/icons/youtube.svg"
              className="h-8 w-8"
              alt="youtube"
            />
          </div>

          <p className="hidden lg:block text-sm tracking-wider max-w-md ">
            Thrifty Threads is your go-to online thrift store, offering
            one-of-a-kind pieces, timeless style, and conscious fashion.
          </p>

          <div className="justify-end flex gap-10  tracking-wider font-helvetica-medium font-normal">
            <p>CREDITS</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
