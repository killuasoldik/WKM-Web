"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Schoolinfo : React.FC = () => {
	const router = useRouter();

	const handleClick = () => {
		window.location.href = 'https://bfitsthailand.com/';
	};

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center bg-gray-700 bg-blend-multiply">
		<div className="absolute inset-0 z-0">
  <video className="absolute inset-0 object-cover w-full h-full" src="/program/Wkmgen2.mp4" autoPlay loop muted playsInline/>
  <div className="absolute inset-0 bg-gray-700 opacity-10"></div>
</div>
			<div className="container relative z-10 mx-auto flex items-center justify-center px-8 py-12">
				<div className="text-center">
					<h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					| Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-gray-100">Wat Khemapirataram School</span>
					</h1>
					<p className="mb-4 text-lg font-normal mx-auto text-gray-50 lg:text-xl lg:w-2/3">ที่โรงเรียนของเรา เรามุ่งมั่นที่จะพัฒนานักเรียนให้มีความรู้ ความสามารถ และทักษะที่ทันสมัย เพื่อตอบสนองความต้องการในอนาคต โครงการของเราเน้นการเรียนรู้ที่มีส่วนร่วม โดยการใช้ภาษาอังกฤษ และวิธีการสอนที่น่าสนใจ เพื่อให้นักเรียนได้รับประสบการณ์การเรียนรู้ที่ดีที่สุด</p>
					<p className="mb-8 text-lg font-normal lg:w-2/3 mx-auto text-gray-50 lg:text-xl px-4">โรงเรียนวัดเขมภิรตารามมีความภูมิใจที่ได้เป็นพันธมิตรกับบริษัท BFITS ที่สามารถส่งครูที่มีความรู้และความสามารถมาสอนที่โรงเรียนของเรา</p>
					<button className="group rounded-lg relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring" onClick={handleClick}>
						<span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
						<span className="relative text-sm font-medium text-indigo-400 transition-colors group-hover:text-white">BFITS Thailand</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Schoolinfo;
