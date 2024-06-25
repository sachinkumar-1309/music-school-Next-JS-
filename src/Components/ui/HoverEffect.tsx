import React, { useState, useRef, ReactNode } from "react";

type HoverEffectProps = {
	children: ReactNode;
};

const HoverEffect: React.FC<HoverEffectProps> = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);
	const hoverRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<div
			ref={hoverRef}
			className={`transition-transform duration-300 ${
				isHovered ? "transform scale-105" : ""
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{children}
		</div>
	);
};

export default HoverEffect;
