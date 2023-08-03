import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { Movie } from '../../types'
import { addMovie, updateMovie } from "../../Api/movie"

interface IAddMovieFormProps {
	open: boolean
	onClose: () => void
	movie?: Movie,
	refreshMovies: () => void
}

const MovieForm = ({ open, onClose, movie, refreshMovies }: IAddMovieFormProps) => {

	const [title, setTitle] = useState<string>(movie ? movie.title : "")
	const [description, setDescription] = useState<string>(movie ? movie.description : "")
	const [ageLimit, setAgeLimit] = useState<number>(movie ? movie.ageLimit : 100)

	const newMovie: Movie = {
		title: title,
		description: description,
		ageLimit: ageLimit
	}

	const isDisabled = title === "" || description === "" || ageLimit === 100

	const resetFields = () => {
		setAgeLimit(movie ? movie.ageLimit : 100)
		setDescription(movie ? movie.description : "")
		setTitle(movie ? movie.title : "")
	}

	const handleUpdate = (id: string | undefined) => {
		id !== undefined ? updateMovie(id, newMovie).then(handleClose) : () => { }
	}

	const handleSubmit = () => {
		movie ? handleUpdate(movie._id) : addMovie(newMovie).then(handleClose)
	}

	const handleClose = () => {
		refreshMovies()
		resetFields()
		onClose()
	}

	return (
		<>
			<Dialog open={open} onClose={onClose} fullWidth>
				<DialogTitle textAlign='center'>Film hozzáadása</DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								margin="dense"
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								label="Film címe"
								variant="standard"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="ageLimit"
								label="Korhatár"
								value={ageLimit}
								onChange={(e) => setAgeLimit(parseInt(e.target.value))}
								variant="standard"
								fullWidth
								required
								select
								margin="dense"
							>
								<MenuItem value={100}>Válasszon</MenuItem>
								<MenuItem value={0}>Korhatár nélküli</MenuItem>
								<MenuItem value={6}>6 éves kortól</MenuItem>
								<MenuItem value={12}>12 éves kortól</MenuItem>
								<MenuItem value={16}>16 éves kortól</MenuItem>
								<MenuItem value={18}>18 éves kortól</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								label="Film leírása"
								variant="standard"
								multiline
								fullWidth
								required
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Mégsem</Button>
					<Button type="submit" disabled={isDisabled} onClick={handleSubmit}>{movie ? 'Módosítás' : 'Hozzáadás'}</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default MovieForm