import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from './MovieList/MovieList';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';


const theme = createTheme({
	palette: {
		primary: {
			main: "#FF8400",
		},
		background: {
			default: '#FFF2CC',
		},
	},
})

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>
						<Route path={'/'} element={<MovieList />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
