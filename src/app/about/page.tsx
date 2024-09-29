"use client";
import { Description } from "@radix-ui/react-dialog";
import React from "react";

import {
	SiPowerbi,
	SiMicrosoftexcel,
	SiVisualbasic,
	SiPowerapps,
	SiGoogleanalytics,
} from "react-icons/si";

//about data
const personalDetails = {
	title: "Personal Details",
	Description:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Felix Mintah",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+233 000 0000)",
		},
		{
			fieldName: "Experience",
			fieldValue: "12+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Ghanaian",
		},
		{
			fieldName: "Email",
			fieldValue: "felix@gmail.com",
		},
		{
			fieldName: "Contracts",
			fieldValue: "Available",
		},
		{
			fieldName: "Language",
			fieldValue: "English, Twi & Ga",
		},
	],
};

//experience data
const experience = {
	title: "My experience",
	Description:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
	items: [
		{
			company: "Unilever",
			position: "Customer Development IT Manager",
			duration: "Oct 2023 - Present",
		},
		{
			company: "Territory Manager",
			position: "Customer Development IT Manager",
			duration: "Oct 2021 - Oct 2023",
		},
		{
			company: "Unilever",
			position: "Management Informationn Specialist",
			duration: "July 2020 - Sep 2021",
		},
		{
			company: "Unilever",
			position: "Assistant Territory Manager",
			duration: "Oct 2019 - July 2020",
		},
		{
			company: "Intercity STC Coaches Limited ",
			position: "Welding and Fabrication Intern",
			duration: "Jun 2018 - Aug 2018",
		},
		{
			company: "Unilever",
			position: "Plant Production Technician",
			duration: "Feb 2016 - Sep 2016",
		},
	],
};

//education data
const education = {
	title: "My education",
	Description:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
	items: [
		{
			institution: "Accra Technical University",
			degree: "Bachelor of Technology in Mechanical Engineering",
			duration: "Sep 2021 - Feb 2023",
		},
		{
			institution: "Accra Technical University",
			degree: "Higher Diploma in Plant Engineering",
			duration: "Sep 2016 - Dec 2019",
		},
		{
			institution: "Inbound Sales",
			degree: "HubSpot Acadamy",
			duration: "April 2023",
		},
		{
			institution: "University of Colorado Boulder",
			degree: "Initiating & Planning Project",
			duration: "Oct 2022",
		},
		{
			institution:
				"University of Califonia Irvine Division of Continuing Education",
			degree: "Excel/Vba For Creative Problem",
			duration: "Oct 2022",
		},
		{
			institution: "LinkedIn",
			degree: "Power BI Essential Training",
			duration: "May 2021",
		},
		{
			institution: "LinkedIn",
			degree: "Data Dashboard in Power BI",
			duration: "May 2021",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="personal details">Personal Details</TabsTrigger>
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* personal details */}
						<TabsContent value="personal details" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{personalDetails.title}</h3>
								<p className="max-w-[600] text-white/60 mx-auto xl:mx-0">
									{personalDetails.Description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{personalDetails.info.map((item, index) => {
										return (
											<div key={index}>
												<li className="flex items-center justify-center xl:justify-start gap-4">
													<span className="text-white/60">
														{item.fieldName}
													</span>
													<span className="text-xl">{item.fieldValue}</span>
												</li>
											</div>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							{/* experience */}
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.Description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((Item, index) => {
											return (
												<div
													key={index}
													className="bg-[#c4cec3] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<li>
														<span className="text-accent">{Item.duration}</span>
														<h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
															{Item.position}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent">
																{}
															</span>
															<p className="text-white/60">{Item.company}</p>
														</div>
													</li>
												</div>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.Description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((Item, index) => {
											return (
												<div
													key={index}
													className="bg-[#c4cec3] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<li>
														<span className="text-accent">{Item.duration}</span>
														<h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
															{Item.degree}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent">
																{}
															</span>
															<p className="text-white/60">
																{Item.institution}
															</p>
														</div>
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
			</div>
		</motion.div>
	);
};

export default About;
