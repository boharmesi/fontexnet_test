import { useState } from "react";
import { Movie } from "../types";

export const useMovies = () => {
	const [movies, setMovies] = useState<Movie[]>([])

	return { movies, setMovies }
}


