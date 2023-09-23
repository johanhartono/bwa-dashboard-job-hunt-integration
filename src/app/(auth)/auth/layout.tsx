import { Epilogue } from "next/font/google";
import '../../../app/globals.css';

import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";

const epilogue = Epilogue({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={epilogue.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
