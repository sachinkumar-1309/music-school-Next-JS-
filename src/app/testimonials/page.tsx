"use client";
// components/Testimonials.js
import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
	{
		id: 1,
		name: "John Doe",
		position: "Student",
		testimonial:
			"This music school has transformed my skills. The teachers are amazing!",
		photo: "/courses/Students/Student1.jpg",
	},
	{
		id: 2,
		name: "Jane Smith",
		position: "Parent",
		testimonial:
			"My child has made incredible progress. Highly recommend this school!",
		photo: "/courses/Students/Student2.jpg",
	},
	{
		id: 3,
		name: "Alice Johnson",
		position: "Student",
		testimonial:
			"The courses are comprehensive and the faculty is very supportive.",
		photo: "/courses/Students/Student3.jpg",
	},
	{
		id: 4,
		name: "Robert Brown",
		position: "Parent",
		testimonial:
			"The school's environment is perfect for learning and growth.",
		photo: "/courses/Students/Student4.jpg",
	},
	{
		id: 5,
		name: "Maria Davis",
		position: "Student",
		testimonial:
			"I have improved my skills tremendously. The practice sessions are very effective.",
		photo: "/courses/Students/Student5.jpg",
	},
	{
		id: 6,
		name: "David Wilson",
		position: "Student",
		testimonial:
			"I love the diversity of courses offered here. There's something for everyone.",
		photo: "/courses/Students/Student6.jpg",
	},
];

const Testimonials = () => {
	const [current, setCurrent] = React.useState(0);
	const length = testimonials.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(testimonials) || testimonials.length <= 0) {
		return null;
	}

	return (
		// <section className="py-24 min-h-screen antialiased ">
		// 	{/* <h1 className="text-3xl text-center w-full h-auto">Feedbacks</h1> */}

		// </section>
		<div>
			<h1 className="text-3xl text-center w-full text-gray-300">Feedbacks</h1>
			<div className={`${styles.testimonials} rounded-full`}>
				<div className={styles.slider}>
					{testimonials.map((testimonial, index) => (
						<div
							className={index === current ? styles.active : styles.slide}
							key={index}>
							{index === current && (
								<div className={styles.testimonialContent}>
									<img
										src={testimonial.photo}
										alt={testimonial.name}
										className={styles.photo}
									/>
									<p className={styles.text}>{testimonial.testimonial}</p>
									<h4 className={styles.name}>{testimonial.name}</h4>
									<p className={styles.position}>{testimonial.position}</p>
								</div>
							)}
						</div>
					))}
					<button className={styles.leftArrow} onClick={prevSlide}>
						&#10094;
					</button>
					<button className={styles.rightArrow} onClick={nextSlide}>
						&#10095;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
