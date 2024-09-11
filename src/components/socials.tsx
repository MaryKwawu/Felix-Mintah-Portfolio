import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
	{
		icon: <FaLinkedin />,
		path: "",
	},
	{
		icon: <FaTwitter />,
		path: "",
	},
	{
		icon: <FaInstagram />,
		path: "",
	},
];
const Socials = ({ containerStyles, iconStyles }: any) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<div key={index}>
						<Link href={"socials.path"} className={iconStyles}>
							{item.icon}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Socials;
