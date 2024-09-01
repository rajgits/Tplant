"use client"; // Add this line to mark the component as a Client Component

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Add this import

export default function Home() {
  const [points, setPoints] = useState(0); // Add state for points

  const handleClick = () => {
    setPoints(points + 1); // Increment points on click
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div
        className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      >
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em] text-center">
            TPlant
          </h2>

          <div className="container w-full">
            <div className="px-4 py-3 w-full">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-[218px] w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://cdn.usegalileo.ai/sdxl10/864c3891-1538-4e28-a152-1b5e3ddac8da.png")',
                }}
              >
                <div className="flex p-4">
                  <p className="text-white tracking-light text-[28px] font-bold leading-tight">Water the plant</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[#111618] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Click the button and see what happens next.
          </p>

          <div className="flex px-4 py-3 w-full">
            <button
              onClick={handleClick} // Update button to handle click
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#333] text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform transform hover:scale-105"
            >
              <span className="truncate text-2xl">💧</span> {/* Water pour icon */}
            </button>
          </div>

          <p className="text-[#111618] text-3xl font-bold leading-normal pb-3 pt-1 px-4 text-center">
            Points: {points} {/* Display points */}
          </p>
        </div>

        <div>
          <div className="flex gap-2 border-t border-[#f0f3f4] bg-white px-4 pb-3 pt-2">
            <a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111618]" href="#">
              <div className="text-[#111618] flex h-8 items-center justify-center" data-icon="MagnifyingGlass" data-size="24px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"></path>
                </svg>
              </div>
              <p className="text-[#111618] text-xs font-medium leading-normal tracking-[0.015em]">Tasks</p>
            </a>

            <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#637d88]" href="#">
              <div className="text-[#637d88] flex h-8 items-center justify-center" data-icon="ChatTeardropText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z"></path>
                </svg>
              </div>
              <p className="text-[#637d88] text-xs font-medium leading-normal tracking-[0.015em]">Invite</p>
            </a>

            <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#637d88]" href="#">
              <div className="text-[#637d88] flex h-8 items-center justify-center" data-icon="UserCircle" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                </svg>
              </div>
              <p className="text-[#637d88] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
            </a>
          </div>
          <div className="h-5 bg-white"></div>
        </div>
      </div>
    </main>
  );
}
