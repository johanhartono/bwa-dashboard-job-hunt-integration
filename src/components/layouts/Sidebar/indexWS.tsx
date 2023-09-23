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

	return (
		<div className="">
			<div className="">
				<div className="">
					<h2 className="">
						Dashboard
					</h2>
					<div className="">
						<Button
							variant={"ghost"}
							className=""
							onClick={() => router.push("/")}
						>
							<AiOutlineHome className="" />
							Home
						</Button>
						<Button
							variant={"ghost"}
							className=""
						>
							<AiOutlineMessage className="" />
							Messages
						</Button>
						<Button
							variant={"ghost"}
							className=""
						>
							<BsBuildings className="" />
							Company Profile
						</Button>
						<Button
							variant={"ghost"}
							className=""
						>
							<AiOutlineUsergroupAdd className="" />
							All Applicants
						</Button>
						<Button
							variant={"ghost"}
							className=""
							onClick={() => router.push("/job-listings")}
						>
							<HiOutlineClipboardList className="" />
							Job Listings
						</Button>
						<Button
							variant={"ghost"}
							className=""
						>
							<AiOutlineCalendar className="" />
							My Schedule
						</Button>
					</div>
				</div>
			</div>
			<div className="">
				<div className="">
					<h2 className="">
						Settings
					</h2>
					<div className="">
						<Button
							variant={"ghost"}
							className=""
							onClick={() => router.push("/settings")}
						>
							<BsGear className="" />
							Settings
						</Button>
						<Button
							variant={"ghost"}
							className=""
							onClick={() => signOut()}
						>
							<AiOutlineLogout className="" />
							Logout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
