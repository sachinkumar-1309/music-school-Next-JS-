import React from "react";
import Image from "next/image";
import Testimonials from "../testimonials/page";
import Showcase from "../showcase/page";

const aboutus = {
	history:
		"Our music school was founded in 1990 with the mission to provide high-quality music education. Over the past three decades, we have grown to become a leading institution with a diverse range of courses and experienced faculty.",
	mission:
		"To inspire and nurture the next generation of musicians through comprehensive music education, fostering creativity, discipline, and passion.",
	vision:
		"To be recognized globally as a premier music education institution, renowned for our excellence in teaching, innovative programs, and successful alumni.",
	faculty: [
		{
			name: "John Doe",
			title: "Director",
			image: "/courses/Instructor/Director.jpg",
			bio: "John has over 30 years of experience in music education. He has led numerous successful programs and is passionate about fostering talent in young musicians.",
		},
		{
			name: "Jane Smith",
			title: "Piano Instructor",
			image: "/courses/Instructor/pianist.jpg",
			bio: "Jane is a classically trained pianist with numerous awards. She has been teaching piano for over 15 years and has helped many students achieve excellence.",
		},
		{
			name: "Emily Johnson",
			title: "Violin Instructor",
			image: "/courses/Instructor/Violin.jpg",
			bio: "Emily is a seasoned violinist with a rich background in orchestral and solo performances. She brings her extensive knowledge and passion to her students.",
		},
		{
			name: "Michael Brown",
			title: "Guitar Instructor",
			image: "/courses/Instructor/Guitar.jpg",
			bio: "Michael is an expert guitarist specializing in both classical and contemporary styles. His engaging teaching methods make learning guitar fun and effective.",
		},
		{
			name: "Sarah Wilson",
			title: "Vocal Coach",
			image: "/courses/Instructor/Vocal.jpg",
			bio: "Sarah is a professional singer with a deep understanding of vocal techniques. She has coached many students to enhance their vocal abilities and confidence.",
		},
	],
};

const AboutUs = () => {
	return (
		<section className="min-h-screen py-12 pt-36 text-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-6xl text-center font-extrabold mb-16 underline decoration-blue-400">
					About Us
				</h2>
				<div className="mb-12 text-center text-gray-400">
					<p className="mb-6 text-xl leading-relaxed">{aboutus.history}</p>
					
				</div>
				<h3 className="text-3xl font-semibold mb-4 text-center">
					Our Faculty
				</h3>
				<div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 gap-8">
					{aboutus.faculty.map((member, index) => (
						<div
							key={index}
							className=" bg-black/[0.1] border border-gray-800 p-6 rounded-lg shadow-lg">
							<img
								className="w-full h-[20rem]"
								src={member.image}
								alt={member.name}
							/>
							<h4 className="text-xl font-bold mb-2 mt-1">{member.name}</h4>
							<p className="text-sm font-semibold mb-1 text-gray-300 ">
								{member.title}
							</p>
							<p className="text-gray-500">{member.bio}</p>
						</div>
					))}
				</div>
				<Showcase />
				<Testimonials />
			</div>
		</section>
	);
};

export default AboutUs;
