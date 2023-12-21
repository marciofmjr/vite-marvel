// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Card({ id, name, image, url }: { id: string; name: string; image: string; url: string}) {
	return (
		<>
			<a target="_blank" href={url}  className="duration-300 hover:scale-110 bg-white border-solid border-slate-300 border-2 rounded-lg overflow-hidden shadow-md">
				<img src={image} alt="Hero" className="duration-300 w-full aspect-[2/3] object-cover object-center" />
				<div className="p-4">
					<h2 className="text-xl font-medium">{ name }</h2>
					{/* <p>{id}</p> */}
				</div>
			</a>
		</>
	)
}