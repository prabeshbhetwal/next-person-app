import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="border-t bg-background py-8 px-4 text-muted-foreground">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<span className="font-semibold text-lg">Next Person App</span>
				<nav className="flex gap-6 text-sm">
					<Link href="/" className="hover:underline">
						Home
					</Link>
					<Link href="/about" className="hover:underline">
						About
					</Link>
				</nav>
				<span className="text-xs">Jasha &copy; {currentYear}. All rights reserved.</span>
			</div>
		</footer>
	);
}