export default function Card({ name, image }: { name: string; image: string}) {
	return (
		<>
			<div className="w-64 border-solid border-slate-300 border-2 rounded-lg overflow-hidden shadow-md">
				<img src={image} alt="Hero" className="w-full aspect-square object-cover object-center" />
				<div className="bg-white p-4">
					<h2 className="text-xl font-medium">{ name }</h2>
				</div>
			</div>
		</>
	)
}