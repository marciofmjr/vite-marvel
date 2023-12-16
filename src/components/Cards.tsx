import Card from "./Card";
import characters from './../data/characters.json'

export default function Cards() {
	return (
		<>
			{/* <div className="flex justify-between flex-wrap md:gap-12"> */}
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{ characters.map(char => (
					<Card key={char.id} name={char.name} image={char.image} />
				)) }
			</div>
		</>
	)
}