// eslint-disable-next-line @typescript-eslint/ban-types
export default function SearchBar({ setSearch }: { setSearch: Function}) {
	return (
		<>
			<div className="flex w-full justify-center my-8">
			<input onChange={e => setSearch(e.target.value)} type="text" placeholder="Pesquise aqui" className="w-full max-w-2xl text-center text-lg p-3 uppercase border-double border-4 border-slate-700" />
		</div>
		</>
	)
}