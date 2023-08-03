import { Dialog, DialogTitle, DialogContent, Grid, DialogActions, Button, Typography, Divider, Avatar } from "@mui/material"
import { Movie } from "../types"

interface IMovieDetailsProps {
	open: boolean
	onClose: () => void
	movie: Movie
}

const MovieDetails = ({ open, onClose, movie }: IMovieDetailsProps) => {
	return (
		<Dialog open={open} onClose={onClose} fullWidth>
			<DialogTitle>
				<Grid container display="flex" justifyContent="center" alignItems="center">
					<Grid item>
						<Avatar variant="square" sx={{ width: 80, height: 80 }} src="src/static/movieIcon.png" />
					</Grid>
					<Grid item>
						<Typography variant="h4">{movie.title}</Typography>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Grid container>
					<Grid item xs={12}>
						<Divider textAlign="left" style={{ color: 'orange' }}>
							{movie.ageLimit === 0 ? 'Korhatár nélkül megtekinthető' : movie.ageLimit + ' éves kortól ajánlott'}
						</Divider>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">{movie.description}</Typography>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Vissza</Button>
			</DialogActions>
		</Dialog>
	)
}

export default MovieDetails