"use client";
import { Description } from "@radix-ui/react-dialog";
import React from "react";


//about data
const personalDetails = [
	{
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
	},
];

//experience data
const experience = [
	{
		title: "My experience",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		item: [
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
				position: "Management Informationn Specialis",
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
	},
];

//education data
const education = [
	{
		title: "My education",
		Description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem provident rerum",
		item: [
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
	},
];

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
						<TabsTrigger value="educationn">Education</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* personal details */}
						<TabsContent value="personal details" className="w-full">
							<div>
								<h3>{personalDetails.}</h3>
							</div>
						</TabsContent>
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<h3></h3>
						</TabsContent>
						{/* education */}
						<TabsContent value="education" className="w-full">
							education
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default About;
