import { Grid, Typography, Divider } from "@mui/material"

const ListHeader = () => {
	return (
		<>
			<Grid item xs={4}>
				<Typography variant="h6">Film címe</Typography>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h6">
					Leírása
				</Typography>
			</Grid>
			<Grid item xs>
				<Typography variant="h6">Korhatár</Typography>
			</Grid>
			<Grid item xs>
				<Typography variant="h6">További lehetőségek</Typography>
			</Grid>
			<Divider variant='middle' style={{ width: '100%', background: 'orange' }} />
		</>
	)
}

export default ListHeader