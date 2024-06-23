"use client";
import React from "react";
import Image from "next/image";
import { HoverEffect } from "@/Components/ui/card-hover-effect";

type Showcases = {
	id: number;
	title: string;
	description: string;
	media: string;
	type: "video" | "audio";
	student: string;
};

const showcases: Showcases[] = [
	{
		id: 1,
		title: "Piano Performance",
		description:
			"A beautiful piano performance by our student, Alice Johnson, showcasing her talent and dedication.",
		media: "/courses/Videos/Piano.mp4",
		type: "video",
		student: "Alice Johnson",
	},
	{
		id: 2,
		title: "Violin Recital",
		description:
			"An amazing violin recital by Michael Lee, demonstrating his exceptional skills.",
		media: "/courses/Videos/Violin.mp4",
		type: "video",
		student: "Michael Lee",
	},
	{
		id: 3,
		title: "Guitar Solo",
		description:
			"An electrifying guitar solo performance by Emily Brown. A must-watch!",
		media: "/courses/Videos/Guitar.mp4",
		type: "video",
		student: "Emily Brown",
	},
	{
		id: 4,
		title: "Vocal Performance",
		description:
			"A stunning vocal performance by Sarah Wilson, showcasing her powerful voice.",
		media: "/courses/Videos/Vocal.mp4",
		type: "video",
		student: "Sarah Wilson",
	},
];

const Showcase = () => {
	const [selectedShowcase, setSelectedShowcase] =
		React.useState<Showcases | null>(null);

	const openLightbox = (showcase: Showcases) => {
		setSelectedShowcase(showcase);
	};

	const closeLightbox = () => {
		setSelectedShowcase(null);
	};

	return (
		<section className="py-12 pt-24 text-white">
			<div className="container mx-auto px-4 lg:max-w-6xl">
				<h2 className="text-4xl md:text-6xl text-center font-extrabold mb-12 underline decoration-gray-800">
					Student Showcase
				</h2>
				{/* <HoverEffect items={showcases}/> */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
					{showcases.map((showcase) => (
						<div
							key={showcase.id}
							className="border border-gray-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
							onClick={() => openLightbox(showcase)}>
							<div className="thumbnail ">
								{showcase.type === "video" ? (
									<video
									className="rounded-lg"
									src={showcase.media}
									width={500}
									height={500}
									muted
									loop
									onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
									onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
								/>
								) : (
									<video className="rounded-lg" src={showcase.media} />
								)}
							</div>
							<div className="details">
								<h4 className="text-2xl font-bold mt-6 mb-2">
									{showcase.title}
								</h4>
								<p className="text-xl text-blue-400 mb-4">
									{showcase.student}
								</p>
								<p className="text-lg text-gray-400">
									{showcase.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{selectedShowcase && (
					<div className="fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-75 flex items-center justify-center">
						<div className="bg-gray-900 p-8 rounded-lg shadow-lg relative">
							<button
								className="absolute top-2 right-2 p-1 text-white text-2xl"
								onClick={closeLightbox}>
								&times;
							</button>
							{selectedShowcase.type === "video" ? (
								<video
									src={selectedShowcase.media}
									controls
									className="w-full max-h-96 mb-4 rounded-lg"
								/>
							) : (
								<audio
									src={selectedShowcase.media}
									controls
									className="w-full mb-4 rounded-lg"
								/>
							)}
							<h3 className="text-2xl font-bold mb-2">
								{selectedShowcase.title}
							</h3>
							<p className="text-xl text-blue-400 mb-4">
								{selectedShowcase.student}
							</p>
							<p className="text-lg text-gray-400">
								{selectedShowcase.description}
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Showcase;
