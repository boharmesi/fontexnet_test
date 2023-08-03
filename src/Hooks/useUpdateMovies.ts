import { getMovies } from "../Api/movie"
import { Movie } from "../types"
import { useMovies } from "./useMovies"


export const useUpdateMovies = () => {
	const { setMovies } = useMovies()
	getMovies().then((response) => {
		let movieList: Movie[] = []
		response.data.map((item: Movie) => {
			let movie: Movie = {
				_id: item._id,
				title: item.title,
				description: item.description,
				ageLimit: item.ageLimit
			}
			movieList.push(movie)
		})
		setMovies(movieList)
	})
}