"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const roadmap = [
	{
		num: "01",
		title: "Customer Development IT Manager",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
	{
		num: "02",
		title: "Territory Manager",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
	{
		num: "03",
		title: "Management Information System Specialis",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
	{
		num: "04",
		title: "Welding & Fabrication Intern",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
	{
		num: "05",
		title: "Plant Production Technician",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
	{
		num: "05",
		title: "Plant Production Technician",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		href: "",
	},
];

import { motion } from "framer-motion";

const Roadmap = () => {
	return (
		<div>
			<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
						}}
						className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
					>
						{roadmap.map((roadmap, index) => {
							return (
								<div
									key={index}
									className="flex-1 flex flex-col justify-center gap-6 group"
								>
									{/* top */}
									<div className="w-full flex justify-between items-center">
										<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transitiion-all duration-500">
											{roadmap.num}
										</div>
										<Link
											href={roadmap.href}
											className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
										>
											<BsArrowDownRight className="text-primary text-3xl" />
										</Link>
									</div>
									{/* title */}
									<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
										{roadmap.title}
									</h2>
									{/* description */}
									<p className="text-white/60">{roadmap.Description}</p>
									{/* border */}
									<div className="border-b border border-white/20 w-full">
										{}
									</div>
								</div>
							);
						})}
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Roadmap;
