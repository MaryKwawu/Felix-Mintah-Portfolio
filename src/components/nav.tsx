"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "about",
		path: "/about",
	},
	{
		name: "skill",
		path: "/skill",
	},
	{
		name: "roadmap",
		path: "/roadmap",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const Nav = () => {
	const pathname = usePathname();

	return (
		<div className="">
			<nav className="flex gap-8 xl:py-8">
				{links.map((link, index) => {
					return (
						<div key={index}>
							<Link
								href={link.path}
								className={`${
									link.path === pathname &&
									"text-accent border-b-2 border-accent"
								} capitalize font-medium hover:text-accent transition-all`}>
								{link.name}
							</Link>
						</div>
					);
				})}
			</nav>
		</div>
	);
};

export default Nav;
