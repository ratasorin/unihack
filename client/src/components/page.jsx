export function Page(props) {
	return (
		// Centered page
		<div
			className="max-w-5xl mx-auto pt-20"
			style={{ minHeight: "calc(100vh - 200px)" }}
		>
			{props.children}
		</div>
	);
}
