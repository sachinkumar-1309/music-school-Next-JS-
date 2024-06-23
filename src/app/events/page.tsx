import React from "react";
import { HoverBorderGradient } from "@/Components/ui/hover-border-gradient";

const events = [
	{
		id: 1,
		title: "Spring Recital",
		date: "2024-07-20",
		time: "6:00 PM",
		location: "Main Auditorium",
		description:
			"Join us for an evening of performances by our talented students.",
		image: "/courses/Events/recital.jpg",
	},
	{
		id: 2,
		title: "Music Theory Workshop",
		date: "2024-07-15",
		time: "10:00 AM",
		location: "Room 102",
		description: "A workshop to deepen your understanding of music theory.",
		image: "/courses/Events/workshop.jpg",
	},
	{
		id: 3,
		title: "Masterclass with John Doe",
		date: "2024-05-10",
		time: "10:00 AM",
		location: "Room 101",
		description:
			"A unique opportunity to learn from the esteemed musician John Doe. Open to all students and faculty, this masterclass will cover advanced techniques and performance skills.",
		image: "/courses/Events/MasterClass.jpg",
	},
	{
		id: 4,
		title: "Summer Music Camp",
		date: "2024-07-01",
		time: "9:00 AM",
		location: "Music School Campus",
		description:
			"A week-long music camp for students of all ages. Engage in intensive practice sessions, group performances, and fun activities, all aimed at enhancing your musical skills.",
		image: "/courses/Events/SummerCamp.jpg",
	},
	{
		id: 5,
		title: "Jazz Night",
		date: "2024-08-20",
		time: "7:00 PM",
		location: "Outdoor Stage",
		description:
			"Experience a night of mesmerizing jazz performances by our advanced students and guest artists. Enjoy an evening under the stars filled with soulful music.",
		image: "/courses/Events/JazzNIght.jpg",
	},
	{
		id: 6,
		title: "Holiday Concert",
		date: "2024-12-15",
		time: "6:00 PM",
		location: "Main Auditorium",
		description:
			"Celebrate the festive season with a concert featuring holiday classics and new compositions by our students. Bring your family and friends for a joyous musical evening.",
		image: "/courses/Events/HolidayConcert.jpg",
	},
	{
		id: 7,
		title: "Alumni Meet and Greet",
		date: "2024-09-25",
		time: "5:00 PM",
		location: "School Courtyard",
		description:
			"Reconnect with old friends and make new connections at our annual alumni meet and greet. Enjoy performances, refreshments, and networking opportunities.",
		image: "/courses/Events/Meet&Greet.jpg",
	},
];

type Event = {
	id: number;
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
	image: string;
};

const Events = () => {
	return (
		<section className="min-h-screen py-12 pt-36 text-white">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-6xl text-center font-extrabold mb-12 underline decoration-blue-500"></h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{events.map((event: Event) => (
						<HoverBorderGradient
							containerClassName="rounded"
							as="button"
							className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
							<div
								key={event.id}
								className=" bg-black rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
								<img
									src={event.image}
									alt={event.title}
									className="rounded-lg mb-4 h-[280px] w-full"
								/>
								<div className="p-6 w-full">
									<h3 className="text-2xl font-bold mb-2">{event.title}</h3>
									<p className="text-xl text-blue-400 mb-2">
										{event.date} at {event.time}
									</p>
									<p className="text-lg text-gray-400 mb-2">
										{event.location}
									</p>
									<p className="text-md text-gray-300 ">
										{event.description}
									</p>
								</div>
							</div>
						</HoverBorderGradient>
					))}
				</div>
				<div className="m-40 flex justify-center text-center"></div>
			</div>
		</section>
	);
};

export default Events;
