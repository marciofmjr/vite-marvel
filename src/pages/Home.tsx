// import Menu from "../components/Menu"
import SearchBar from "../components/SearchBar"
import MainTitle from "../components/MainTitle"
import Cards from "../components/Cards"
import { useState } from "react";

function Home() {
	const [search, setSearch] = useState('');

	return (
		<>
			<MainTitle />
			<SearchBar setSearch={setSearch} />
			<Cards search={search}/>
		</>
	)
}

export default Home