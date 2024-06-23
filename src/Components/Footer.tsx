function Footer() {
	return (
		<footer className="bg-black text-gray-400 py-12">
			<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
					<p className="mb-4">
						Music School is a premier institution dedicated to teaching the
						art and science of music. We nurture talent from the ground up,
						fostering a vibrant community of musicians.
					</p>
				</div>
				<div className=" text-center">
					<h2 className="text-white text-lg font-semibold mb-4">
						Quick Links
					</h2>
					<ul className="mr-10">
						<li>
							<a
								href="/"
								className="hover:text-white transition-colors duration-300">
								Home
							</a>
						</li>
						<li>
							<a
								href="/aboutUs"
								className="hover:text-white transition-colors duration-300">
								About
							</a>
						</li>
						<li>
							<a
								href="/courses"
								className="hover:text-white transition-colors duration-300 ml-3">
								Courses
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="hover:text-white transition-colors duration-300 ml-2">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">Connect me on</h2>
					<div className="flex space-x-4">
						<a
							href="#"
							className="hover:text-white transition-colors duration-300">
							Github
						</a>
						<a
							href="#"
							className="hover:text-white transition-colors duration-300">
							Twitter
						</a>
						<a
							href="#"
							className="hover:text-white transition-colors duration-300">
							LinkedIn
						</a>
					</div>
				</div>
				<div>
					<h2 className="text-white text-lg font-semibold mb-4">
						Contact Us
					</h2>
					<p>Jharkhand, India</p>
					<p>Dumka 814101</p>
					<p>Email: sachinkg1309@gmail.com</p>
					<p>Phone: (+91) 9693186899</p>
				</div>
			</div>
			<p className="text-center text-xs pt-8">
				© 2024 Music School. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
