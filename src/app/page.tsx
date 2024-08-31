import FeaturedSection from "@/Components/FeaturedSection";
// import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructors from "@/Components/Instructors";
import TestimonialCards from "@/Components/TestimonialCards";
import UpcomingWebinars from "@/Components/UpcomingWebniars";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
	return (
			<main className="relative">
				<HeroSection />
				<FeaturedSection />
				<WhyChooseUs />
				<TestimonialCards />
				<UpcomingWebinars />
				<Instructors />
			</main>
	);
}
