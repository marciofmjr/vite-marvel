export default function Card({ id, name, image }: { id: string; name: string; image: string}) {
	return (
		<>
			<div className="bg-white border-solid border-slate-300 border-2 rounded-lg overflow-hidden shadow-md">
				<img src={image} alt="Hero" className="w-full aspect-[2/3] object-cover object-center" />
				<div className="p-4">
					<h2 className="text-xl font-medium">{ name }</h2>
					<p>{id}</p>
				</div>
			</div>
		</>
	)
}