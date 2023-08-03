import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Divider, Grid, IconButton, Typography } from '@mui/material';
import { Movie } from '../types';
import ConfirmDeleteDialog from './MovieActions/ConfirmDeleteDialog';
import { useState } from 'react';
import MovieForm from './MovieActions/MovieForm';
import MovieDetails from './MovieDetails';

interface IMovieListItemProps {
	movie: Movie,
	refreshMovies: () => void
}

const MovieListItem = ({ movie, refreshMovies }: IMovieListItemProps) => {

	const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
	const [openMovieForm, setOpenMovieForm] = useState(false)
	const [openMovieDetails, setOpenMovieDetails] = useState(false)

	const handleCloseDeleteDialog = () => {
		setOpenDeleteDialog(false)
		refreshMovies()
	}

	const handleCloseMovieForm = () => {
		setOpenMovieForm(false)
	}

	return (
		<>
			<Grid item xs={4} wrap='nowrap'>
				<Typography noWrap>{movie.title}</Typography>
			</Grid>
			<Grid item xs={4} wrap="nowrap" >
				<Typography noWrap>
					{movie.description}
				</Typography>
			</Grid>
			<Grid item xs>
				<Typography>{movie.ageLimit}</Typography>
			</Grid>
			<Grid item xs>
				<IconButton color='primary' onClick={() => setOpenMovieDetails(true)} >
					<VisibilityIcon />
				</IconButton>
				<IconButton color='primary' onClick={() => setOpenMovieForm(true)}>
					<EditIcon />
				</IconButton>
				<IconButton color='primary' onClick={() => setOpenDeleteDialog(true)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
			<Divider variant='middle' style={{ width: '100%', background: 'orange' }} />
			<ConfirmDeleteDialog open={openDeleteDialog} onClose={handleCloseDeleteDialog} movie={movie} />
			<MovieForm open={openMovieForm} onClose={handleCloseMovieForm} movie={movie} refreshMovies={refreshMovies} />
			<MovieDetails open={openMovieDetails} onClose={() => setOpenMovieDetails(false)} movie={movie} />
		</>
	)
}

export default MovieListItem