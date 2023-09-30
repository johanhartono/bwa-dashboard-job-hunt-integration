import { Inter  } from "next/font/google";
import "../globals.css";

import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const inter = Inter ({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (session !== null) {
		return redirect("/");
	}

	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
