"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<div className="w-full h-full relative ">
			<motion.div
				className="flex justify-center items-center"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duratio: 0.4, ease: "easeIn" },
				}}>
				{/* image */}
				<motion.div
					className="w-[360px] h-[360px] xl:w-[360px] xl:h-[360px] absolute"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duratio: 0.4, ease: "easeInOut" },
					}}>
					<Image
						src="/assets/felix-mintah-head-shot.png"
						alt=""
						priority
						quality={100}
						fill
						className="rounded-full object-cover"
					/>
				</motion.div>
				{/* circle */}
				<motion.svg
					className="w-[360px] h-[360px] xl:w-[360px] xl:h-[360px]"
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg">
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#ffffff"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
							rotate: [120, 360],
						}}
						transition={{}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
