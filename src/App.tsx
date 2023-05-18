import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

//Custom Components
import HomeView from './Views/HomeView'
function App() {
	return (
		<>
			<BrowserRouter>
				<main className='py-3'>
					<Container>
						<Routes>
							<Route path='/' element={<HomeView />} />
						</Routes>
					</Container>
				</main>
			</BrowserRouter>
		</>
	)
}

export default App
