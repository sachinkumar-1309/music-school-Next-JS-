// "use client";
// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/Components/ui/3D-card";
// import courseData from "@/data/music_data.json";
// import { useSelector } from "react-redux";

// function Page() {
// 	const Login = useSelector((state: any) => state.auth.status);
// 	return (
// 		<div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05] py-12 pt-36">
// 			<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
// 				All courses ({courseData.courses.length})
// 			</h1>
// 			<div className="flex flex-wrap justify-center">
// 				{courseData.courses.map((course) => (
// 					<CardContainer key={course.id} className="inter-var m-4">
// 						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
// 							<CardItem
// 								translateZ="50"
// 								className="text-xl font-bold text-neutral-600 dark:text-white">
// 								{course.title}
// 							</CardItem>
// 							<CardItem
// 								as="p"
// 								translateZ="60"
// 								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
// 								{course.description}
// 							</CardItem>
// 							<CardItem translateZ="100" className="w-full mt-4">
// 								<Image
// 									src={course.image}
// 									height="1000"
// 									width="1000"
// 									className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
// 									alt={course.title}
// 								/>
// 							</CardItem>
// 							<div
// 								className={`flex items-center mt-20 ${
// 									Login ? "justify-center" : "justify-between"
// 								}`}>
// 								<CardItem
// 									translateZ={20}
// 									as="button"
// 									className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
// 									Try now →
// 								</CardItem>
// 								{!Login && (
// 									<CardItem
// 										translateZ={20}
// 										as="button"
// 										className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
// 										Sign up
// 									</CardItem>
// 								)}
// 							</div>
// 						</CardBody>
// 					</CardContainer>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Page;
"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3D-card";
import courseData from "@/data/music_data.json";
import Link from "next/link";
const courses = () => {
	interface Course {
		id: number;
		title: string;
		slug: string;
		description: string;
		price: number;
		instructor: string;
		isFeatured: boolean;
		image: string;
	}
	return (
		<div className="min-h-screen bg-black py-12 pt-36">
			<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
				All courses ({courseData.courses.length})
			</h1>
			<div className="flex flex-wrap justify-center">
				{courseData.courses.map((course: Course) => (
					<CardContainer className="inter-var m-4" key={course.id}>
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white">
								{course.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
								{course.description}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								<Image
									src={course.image}
									height="1000"
									width="1000"
									className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
									alt={course.title}
								/>
							</CardItem>
							<div className="flex justify-between items-center mt-20">
								<CardItem
									translateZ={20}
									target="__blank"
									className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
									<Link href={`/courses/${course.id}`}>Learn More</Link>
								</CardItem>
								<CardItem
									translateZ={20}
									as="button"
									className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
									Sign up
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
};

export default courses;
