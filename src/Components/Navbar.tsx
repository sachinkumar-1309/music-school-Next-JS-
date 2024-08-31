"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className="flex">
			<div
				className={cn(
					"fixed top-10 inset-x-0 max-w-3xl mx-auto z-50  text-black",
					className
				)}>
				<Menu setActive={setActive}>
					<Link href={"/"}>
						<MenuItem
							setActive={setActive}
							active={active}
							item="Home"></MenuItem>
					</Link>
					<MenuItem setActive={setActive} active={active} item="Our courses">
						<div className="flex flex-col space-y-4 text-sm text-left">
							<HoveredLink href="/courses">Courses</HoveredLink>
							<HoveredLink href="/courses">Basic music theory</HoveredLink>
							<HoveredLink href="/courses">Advanced composition</HoveredLink>
							<HoveredLink href="/courses">Song writing</HoveredLink>
							<HoveredLink href="/courses">Music production</HoveredLink>
						</div>
					</MenuItem>
					<Link href={"/events"}>
						<MenuItem
							setActive={setActive}
							active={active}
							item="Events"></MenuItem>
					</Link>
					<Link href={"/aboutus"}>
						<MenuItem
							setActive={setActive}
							active={active}
							item="About US"></MenuItem>
					</Link>
					<Link href={"/contact"}>
						<MenuItem
							setActive={setActive}
							active={active}
							item="Contact US"></MenuItem>
					</Link>
				</Menu>
			</div>
			{/* <div>
				<Link href={"/signup"}>
					<span>Sign up</span>
				</Link>
			</div> */}
		</div>
	);
}
