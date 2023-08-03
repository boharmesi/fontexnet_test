import axios from "axios"
import { Movie } from '../types'


const MOVIE_BASE_URL = 'https://crudcrud.com/api/'
const API_KEY = 'd55b57df524b49f8ba2e3edcd7838e6f'
const DATABASE_NAME = '/movies'

export const getMovies = () =>
	axios.get(MOVIE_BASE_URL + API_KEY + DATABASE_NAME);

export const addMovie = (movie: Movie) =>
	axios.post(MOVIE_BASE_URL + API_KEY + DATABASE_NAME, movie,
		{
			headers: {
				'Content-Type': ' application/json',
			}
		}
	)

export const deleteMovie = (id: string) =>
	axios.delete(MOVIE_BASE_URL + API_KEY + DATABASE_NAME + "/" + id)

export const updateMovie = (id: string, movie: Movie) =>
	axios.put(MOVIE_BASE_URL + API_KEY + DATABASE_NAME + "/" + id, movie,
		{
			headers: {
				'Content-Type': ' application/json',
			}
		}
	)