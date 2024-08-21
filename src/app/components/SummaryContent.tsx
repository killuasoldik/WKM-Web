
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SummaryContent : React.FC = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/form");
	};

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center bg-gray-700 bg-blend-multiply">
			<div className="absolute inset-0 z-0">
				<Image src="/program/try3.png" alt="schoolinfo background" layout="fill" objectFit="cover" objectPosition="center" quality={75} priority={true} />
				<div className="absolute inset-0 bg-white-700 "></div>
			</div>
			<div className="container relative z-10 mx-auto flex items-center justify-center px-6 py-12">
				<div className="text-center">
					<h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
					Summary Content
					</h1>
					
				</div>
			</div>
		</section>
	);
};
export default SummaryContent;
