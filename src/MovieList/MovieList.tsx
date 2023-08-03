import { Grid, Avatar, Button, MenuItem, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MovieListItem from "./MovieListItem";
import { useEffect, useState } from "react";
import MovieForm from "./MovieActions/MovieForm";
import { Movie } from "../types"
import { getMovies } from "../Api/movie";
import ListHeader from "./ListHeader";

const MovieList = () => {

	const [openForm, setOpenForm] = useState(false)
	const [movies, setMovies] = useState<Movie[]>([])
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
	const [ageLimit, setAgeLimit] = useState<number>(100)

	const refreshMovies = () => {
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
			ageLimit === 100 ? setFilteredMovies(movieList) : setFilteredMovies(filter)
		})
	}

	useEffect(() => {
		refreshMovies()
	}, [openForm, ageLimit])

	const filter = movies.filter((obj) => {
		return obj.ageLimit === ageLimit
	})

	return (
		<>
			<Grid container
				display='flex'
				justifyContent='flex-end'
				alignItems='center'
			>
				<Grid item xs={7} textAlign='end' marginBottom={8}>
					<h2>Filmkatalógus</h2>
				</Grid>
				<Grid item xs={5} marginBottom={8}>
					<Avatar variant="square" sx={{ width: 80, height: 80 }} src="src/static/movieIcon.png" />
				</Grid>
				<Grid item container>
					<Grid item xs={6}>
						<TextField
							id="ageLimit"
							value={ageLimit}
							label="Korhatár"
							onChange={(e) => setAgeLimit(parseInt(e.target.value))}
							required
							variant="outlined"
							select
						>
							<MenuItem value={100}>Összes film</MenuItem>
							<MenuItem value={0}>Korhatár nélküli</MenuItem>
							<MenuItem value={6}>6 éves kortól</MenuItem>
							<MenuItem value={12}>12 éves kortól</MenuItem>
							<MenuItem value={16}>16 éves kortól</MenuItem>
							<MenuItem value={18}>18 éves kortól</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={6} alignItems='flex-end'>
						<Button startIcon={<AddIcon />} variant="outlined" onClick={() => setOpenForm(true)}>Film hozzáadása</Button>
					</Grid>
				</Grid>
				<Grid item container xs={12} alignItems='center' marginTop={8}>
					<ListHeader />
				</Grid>
				{filteredMovies?.length !== 0 ?
					<>
						<Grid item container xs={12} alignItems='center'>
							{filteredMovies?.map((movie) =>
								<MovieListItem movie={movie} key={movie._id} refreshMovies={refreshMovies} />
							)}
						</Grid>
					</> :
					<Grid item xs={12} alignItems='center'>
						<Typography variant="h5">A film lista üres.</Typography>
					</Grid>
				}
			</Grid>
			<MovieForm open={openForm} onClose={() => setOpenForm(false)} refreshMovies={refreshMovies} />
		</>
	)
}

export default MovieList;
