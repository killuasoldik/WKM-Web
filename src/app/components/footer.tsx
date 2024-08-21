import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
	return (
		<footer className="bg-blue-500 px-10 pt-0">
			<div className="w-full max-w-screen-xl px-6 py-6 justify-center mx-auto lg:py-8">
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
					<div className="text-center lg:text-left mb-8 lg:mb-0">
						<h1 className="text-2xl font-semibold text-yellow-400 ">| Wat Khemapirataram School </h1>
						<p className="mt-4 text-yellow-400 lg:w-2/3 mx-auto lg:mx-0">
						Khemmaphirataram Temple School, No. 47, Suan Yai Subdistrict, Mueang Nonthaburi District, Nonthaburi Province 11000  
						</p>
					</div>
					<div className=" grid-cols-1 sm:grid-cols-2 lg:me-auto gap-8 lg:gap-16 hidden lg:grid">
						<div className="text-center lg:text-left">
							<h2 className="mb-6 text-sm font-semibold  uppercase text-white "></h2>
							<ul className="text-gray-100 font-medium">
								<li className="mb-2 ">
									<a href="/aboutus" className="hover:underline hover:text-yellow-500">
										About Us
									</a>
								</li>
								<li className="mb-2">
									<a href="/academic" className="hover:underline hover:text-yellow-500">
										Academic
										</a>
								</li>
								<li className="mb-2">
									<a href="/bookavisit" className="hover:underline hover:text-yellow-500">
										Book a Visit
									</a>
								</li>
								<li>
									<a href="/contactus" className="hover:underline hover:text-yellow-500">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center lg:text-left hidden lg:block">
							<h2 className="mb-6 text-sm font-semibold uppercase text-white"></h2>
							<ul className="text-gray-100 font-medium">
								<li className="mb-2">
									<a href="https://www.facebook.com/wkm.bfitsprogram" target="_blank" className="hover:underline hover:text-yellow-500">
										Facebook
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.instagram.com/bfitsthailand/" target="_blank" className="hover:underline hover:text-yellow-500">
										Instagram
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.youtube.com/@bfitsthailand" target="_blank" className="hover:underline hover:text-yellow-500">
										Youtube
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.tiktok.com/@bfitsthailand?is_from_webapp=1&sender_device=pc" target="_blank" className="hover:underline hover:text-yellow-500">
										Tiktok
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 sm:mx-auto border-gray-400 lg:my-8" />
				<div className="flex flex-col items-center text-center">
					<span className="text-sm text-gray-100">
					Building Bright Futures Together © 2024{" "}
						<a href="/" className="hover:underline hover:text-yellow-500">
						Wat Khemapirataram School
						</a>
						. Powered By{" "}
						<a className="hover:underline hover:text-yellow-500" href="https://www.facebook.com/BFITSThailandPage" target="_blank" rel="noopener noreferrer">
							BFITS Thailand
						</a>
					</span>
					<div className="flex justify-center mt-4">
						<a href="https://www.facebook.com/wkm.bfitsprogram" target="_blank" className="text-gray-100  hover:text-yellow-500 mx-2">
							<i className="fa-brands fa-facebook text-2xl"></i>
						</a>
						<a href="https://www.instagram.com/bfitsthailand/" target="_blank" className="text-red-500 hover:text-yellow-500 mx-2">
							<i className="fa-brands fa-instagram text-2xl"></i>
						</a>
						<a href="https://www.youtube.com/@bfitsthailand" target="_blank" className="text-red-500 hover:text-yellow-500 mx-2">
							<i className="fa-brands fa-youtube text-2xl"></i>
						</a>
						<a href="https://www.tiktok.com/@bfitsthailand?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-800 hover:text-yellow-500 mx-2">
							<i className="fa-brands fa-tiktok text-2xl"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
