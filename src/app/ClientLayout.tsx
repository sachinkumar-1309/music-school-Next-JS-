"use client";

import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AuthSection from "@/Components/AuthSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div
			className={`${inter.className} relative min-h-screen bg-orange/[0.96] antialiased bg-grid-white/[0.04]`}>
			<AuthSection />
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default ClientLayout;
