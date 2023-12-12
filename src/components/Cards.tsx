import Card from "./Card";
import characters from './../data/characters.json'

export default function Cards() {
	return (
		<>
			<div className="flex justify-between flex-wrap gap-12">
				{ characters.map(char => (
					<Card key={char.id} name={char.name} image={char.image} />
				)) }
			</div>
		</>
	)
}