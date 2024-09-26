"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";

import {
	SiPowerbi,
	SiMicrosoftexcel,
	SiVisualbasic,
	SiPowerapps,
	SiGoogleanalytics,
} from "react-icons/si";

const skills = {
	title: "My skills",
	Description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel sint nihil commodi pariatur aut, quo aperiam",
	skillList: [
		{
			icon: <SiPowerbi />,
			name: "PowerBi",
		},
		{
			icon: <SiMicrosoftexcel />,
			name: "Microsoftexcel",
		},
		{
			icon: <SiVisualbasic />,
			name: "Visualbasic",
		},
		{
			icon: <SiPowerapps />,
			name: "Powerapps",
		},
		{
			icon: <SiGoogleanalytics />,
			name: "Google Analytics",
		},
	],
};

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

const Skill = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<Tabs
				defaultValue="skills"
				className="flex flex-col xl:flex-row gap-[60px]"
			>
				<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
					<TabsTrigger value="skills">Skills</TabsTrigger>
				</TabsList>
				{/* content */}
				<div className="min-h-[70vh] w-full">
					{/* experience */}
					<TabsContent value="skills" className="w-full">
						<div className="flex flex-col gap-[30px] text-center xl:text-left">
							<h3 className="text-4xl font-bold">{skills.title}</h3>
							<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
								{skills.Description}
							</p>
							<ScrollArea className="h-[400px]">
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<div key={index}>
												<li>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#c4cec3]">
																<div className="text-6xl group-hover:text-accent transition-all duration-300 rounded-xl flex justify-center items-center group">
																	{skill.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p>{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											</div>
										);
									})}
								</ul>
							</ScrollArea>
						</div>
					</TabsContent>
				</div>
			</Tabs>
		</motion.div>
	);
};

export default Skill;
