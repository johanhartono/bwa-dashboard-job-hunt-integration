"use client";

import { Button } from "@/components/ui/button";
import React, { FC } from "react";

import { HiOutlineClipboardList } from "react-icons/hi";
import { BsBuildings, BsGear } from "react-icons/bs";
import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlineUsergroupAdd,
	AiOutlineCalendar,
	AiOutlineLogout,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
	const router = useRouter();
	//https://tailwindcss.com/docs/padding -> Utilities for controlling an element's padding.	
	//pb-12	padding-bottom: 3rem; /* 48px */
	//https://tailwindcss.com/docs/min-height -> Utilities for setting the minimum height of an element 
	// min-h-screen	min-height: 100vh;
	//https://tailwindcss.com/docs/space -> Utilities for controlling the space between child elements.
	// space-y-4 > * + *	margin-top: 1rem; /* 16px */
	// https://tailwindcss.com/docs/padding -> Utilities for controlling an element's padding.
	// py-4	padding-top: 1rem; /* 16px */
	// https://tailwindcss.com/docs/width -> Utilities for setting the width of an element.
	// w-full	width: 100%;
	// https://tailwindcss.com/docs/justify-content -> Utilities for controlling how flex and grid items are positioned along a container's main axis.
	// justify-start	justify-content: flex-start;
	// https://tailwindcss.com/docs/border-radius ->  Utilities for controlling the border radius of an element.
	// rounded-none	border-radius: 0px;
	// https://tailwindcss.com/docs/hover-focus-and-other-states -> Using utilities to style elements on hover, focus, and more.
	// https://tailwindcss.com/docs/margin -> Utilities for controlling an element's margin.
	// mr-2	margin-right: 0.5rem; /* 8px */
	// 

	return (
		<div className="pb-12 min-h-screen">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">
						Dashboard
					</h2>
					<div className="space-y-3">
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/")}
						>
							<AiOutlineHome className="mr-2 text-lg" />
							Home
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineMessage className="mr-2 text-lg" />
							Messages
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<BsBuildings className="mr-2 text-lg" />
							Company Profile
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineUsergroupAdd className="mr-2 text-lg" />
							All Applicants
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/job-listings")}
						>
							<HiOutlineClipboardList className="mr-2 text-lg" />
							Job Listings
						</Button>
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineCalendar className="mr-2 text-lg" />
							My Schedule
						</Button>
					</div>
				</div>
			</div>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">
						Settings
					</h2>
					<div className="space-y-3">
						<Button
							variant={"ghost"}
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/settings")}
						>
							<BsGear className="mr-2 text-lg" />
							Settings
						</Button>
						<Button
							variant={"ghost"}
							className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none"
							onClick={() => router.push("auth/signin")}
						>
							<AiOutlineLogout className="mr-2 text-lg" />
							Logout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
