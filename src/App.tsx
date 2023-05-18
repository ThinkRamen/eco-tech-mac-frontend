import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

//Custom Components
import HomeView from './Views/HomeView'
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomeView />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
