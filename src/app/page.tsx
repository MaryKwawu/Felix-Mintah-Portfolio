import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/socials";
import Photo from "@/components/photo";
import Stats from "@/components/ui/stats";

export default function Home() {
	return (
		<section className="h-full flex flex-col justify-between">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl text-[#ffffff]">
							Customer Develpment IT Manager
						</span>
						<h1 className="h1 mb-6 text-[#ffffff]">
							Hello I'm <br /> <span className="text-accent">Felix Mintah</span>
						</h1>
						<p className="max-w-[800px] mb-9 text-[#ffffff]">
							With deep expertise in transformational leadership, stakeholder
							management, and data analysis, I excel in optimizing operations
							using advanced skills in Excel, Power BI, and VBA. My strong
							analytical abilities and effective communication make me a
							valuable asset for driving efficiency and profitability
						</p>
						{/* btns & socials */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button
								variant="outline"
								size="lg"
								className="uppercase flex items-center gap-2">
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover-transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					{/* photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<div className="mt-auto">
				<Stats />
			</div>
		</section>
	);
}
