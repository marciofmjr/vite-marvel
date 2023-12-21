/* eslint-disable no-useless-escape */
import axios from "axios";
import md5 from 'md5';
import { useEffect, useState } from "react";

import Card from "./Card";
import { Circle } from 'rc-progress';


interface Character {
	id: string;
	name: string;
	description: string;
	thumbnail: {
		path: string;
		extension: string;
	};
	resourceURI: string;
	urls: {
		type: string;
		url: string;
	}[];
}

const publicKey = 'ff4368112c06e6f4ba1e5d724751f099';
const privateKey = '334cb54c54ad14f14ce1a5e53cc08bdeeabf661c';
const baseUrl = 'https://gateway.marvel.com:443/v1/public';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const limit = 100;

export default function Cards({ search }: {search: string}) {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [percent, setPercent] = useState(0);

	let allCharacters: Character[] = [];

	const searchCharacter = (name: string) => {
		name = name.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').trim();

		if (search?.length) {
			const match = search.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').trim();
			return name.includes(match);
		}
		return true;
	}

	const getCharacters = async (page: number) => {
		const offset = page * limit;

		if (offset <= 1500) {
			const response = await axios.get(`${baseUrl}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`);
			let cleanedCharacters = response.data.data.results.filter((char: Character) => {
				return !char.thumbnail.path.includes('image_not_available');
			})

			cleanedCharacters = cleanedCharacters.map((char: Character) => {
				return {
					id: char.id,
					name: char.name,
					description: char.description,
					thumbnail: {
						path: char.thumbnail.path,
						extension: char.thumbnail.extension,
					},
					resourceURI: char.resourceURI,
					urls: char.urls
				}
			})

			allCharacters = [...allCharacters, ...cleanedCharacters];
		}
	}

	const getAllCharacters = async () => {
		const localCharacters = JSON.parse(window.localStorage.getItem('characters') || '[]');
		if (localCharacters.length) {
			console.log('ja tem os personagens carregados', localCharacters);
			setCharacters(localCharacters);
		} else {
			console.log('vai carregar os personagens na api');
			// load characters in api
			setLoading(true);
			const max = 16;

			for (let index = 0; index <= max; index++) {
				await getCharacters(index);

				const perc = ((index+1)/max) * 100;
				setPercent(perc);

				if (index === max) {
					window.localStorage.setItem('characters', JSON.stringify(allCharacters));
					setLoading(false);
					getAllCharacters();
				}
			}
		}
	}

	useEffect(() => {
		getAllCharacters();
	}, []);

	return (
		<>
			{ loading && <Circle percent={percent} trailWidth={4} strokeWidth={4} strokeColor="red" className="w-48 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" /> }
			{ !loading &&
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					{ characters && characters.map(char => (
							searchCharacter(char.name) &&
							<Card id={char.id} key={char.id} name={char.name} image={`${char.thumbnail.path}.${char.thumbnail.extension}`} url={char.urls[0].url} />
						))
					}
				</div>
			}
		</>
	)
}