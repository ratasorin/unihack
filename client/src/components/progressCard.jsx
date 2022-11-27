export default function ProgressCard(props) {
	return (
		<div className="rounded-sm bg-white w-40 px-2 py-1 shadow-md mb-1">
			<div className="flex">
				<span>{props.name}</span>
				<span className="flex-1 text-right text-gray-600">
					{props.val}
				</span>
			</div>
			<div className="rounded-sm my-1 bg-slate-500 h-1">
				<div
					className="rounded-sm bg-teal-400 shadow-md shadow-teal-400 h-1"
					style={{ width: props.val }}
				></div>
			</div>
		</div>
	);
}
