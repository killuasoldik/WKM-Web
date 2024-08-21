"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 left-0 w-full h-13 px-4 z-50 bg-white bg-opacity-100"> 
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center space-x-3 rtl:space-x-reverse">
					<Image src="/logo3.png" alt="Logo" width={50} height={100} className="h-17 w-14" />
				</div>
				<button
					onClick={toggleMenu}
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-300 hover:bg-gray-700 focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={isOpen ? "true" : "false"}
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>
				<div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-blue-600 md:bg-white border-gray-100">
						<li>
							<a
								href="/"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-black md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/aboutus"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-black md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								About us
							</a>
						</li>
						<li>
							<a
								href="/academic"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-black md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Academic
							</a>
						</li>
						<li>
							<a
								href="/bookavisit"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-black md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Book a Visit
							</a>
						</li>
						<li>
							<a
								href="/contactus"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-black md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
