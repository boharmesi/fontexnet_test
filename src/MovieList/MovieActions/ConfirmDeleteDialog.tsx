
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { deleteMovie } from '../../Api/movie';
import { Movie } from '../../types';


interface IConfirmDeleteDialogProps {
	open: boolean,
	onClose: () => void,
	movie: Movie
}

const ConfirmDeleteDialog = ({ open, onClose, movie }: IConfirmDeleteDialogProps) => {

	const handleDelete = (id: string | undefined) => {
		id !== undefined ? deleteMovie(id).then(onClose) : () => { }
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
		>
			<DialogTitle>
				Biztosan törölni szeretné a <b>{movie.title}</b> című filmet a listából?
			</DialogTitle>
			<DialogActions>
				<Button onClick={onClose}>Mégsem</Button>
				<Button onClick={() => handleDelete(movie._id)}>
					Törlés
				</Button>
			</DialogActions>
		</Dialog>)
}

export default ConfirmDeleteDialog