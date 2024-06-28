import Image from "next/image";

const Loader = () => (
	<div className="">
		<Image
			src="/icons/loader.svg"
			alt="loader"
			width={24}
			height={24}
			className="animate-spin text-black mr-2"
		/>
	</div>
);

export default Loader;
