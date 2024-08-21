"use client"
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FloatingArrow: React.FC = () => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' }); // Adjust `behavior` to 'smooth' or 'auto'
	  };
	
	return (
		<a href="#" className="fixed bottom-4 right-4 z-50" onClick={handleClick}>
			<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-200">
				<span className="text-white text-4xl">
					<i className="fa-solid fa-arrow-up"></i>
				</span>
			</div>
		</a>
	);
};

export default FloatingArrow;
