"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { useSelector } from "react-redux";

export default function HeroSection() {
	console.log(useSelector((state: any) => state));
	return (
		<div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			{/* <Spotlight
				className="top-0 -right-0 md:-right-60 md:-left-0"
				fill="blue"
			/> */}
			<div className="p-4 relative z-10 w-full text-center">
				<h1 className="mt-20 sm:mt-36 lg:mt-0 text-4xl min-[500px]:text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
					Master the art of music
				</h1>
				<p className="mt-4 font-normal text-base md:text-lg lg:text-xl max-[500px]:text-sm  text-neutral-300 lg:max-w-xl md:max-w-lg mx-auto">
					Dive into our comprehensive music courses and transform your musical
					journey today. Whether you&apos;re a beginner or looking to refine
					your skills, join us to unlock your true potential.
				</p>
				<div className="mt-4">
					<Link href={"/courses"}>
						<Button
							borderRadius="1.75rem"
							className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
							Explore courses
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
