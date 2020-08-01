import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import InfoScreen from './components/InfoScreen'
import HomeButtons from './components/HomeButtons'
import { Switch, Link, Route } from 'react-router-dom'

function App() {
	const [charData, setCharData] = useState([])
	const [planetData, setPlanetData] = useState([])
	const [currentPageChar, setCurrentPageChar] = useState()
	const [currentPagePlanet, setCurrentPagePlanet] = useState()

	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people/?page=1')
			.then((res) => {
				setCharData(res.data.results)
				setCurrentPageChar(1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})

		axios
			.get('https://swapi.dev/api/planets/')
			.then((res) => {
				setPlanetData(res.data.results)
				setCurrentPagePlanet(1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const nextCharData = () => {
		axios
			.get(`https://swapi.dev/api/people/?page=${currentPageChar + 1}`)
			.then((res) => {
				setCharData(res.data.results)
				setCurrentPageChar(currentPageChar + 1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const prevCharData = () => {
		axios
			.get(`https://swapi.dev/api/people/?page=${currentPageChar - 1}`)
			.then((res) => {
				setCharData(res.data.results)
				setCurrentPageChar(currentPageChar - 1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const nextPlanetData = () => {
		axios
			.get(`https://swapi.dev/api/planets/?page=${currentPagePlanet + 1}`)
			.then((res) => {
				setPlanetData(res.data.results)
				setCurrentPagePlanet(currentPagePlanet + 1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const prevPlanetData = () => {
		axios
			.get(`https://swapi.dev/api/planets/?page=${currentPagePlanet - 1}`)
			.then((res) => {
				setPlanetData(res.data.results)
				setCurrentPagePlanet(currentPagePlanet - 1)
				console.log(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className="App">
			<Switch>
				<Route path="/characters">
					<InfoScreen
						Data={charData}
						next={nextCharData}
						prev={prevCharData}
						type={'people'}
					/>
				</Route>
				<Route path="/planets">
					<InfoScreen
						Data={planetData}
						next={nextPlanetData}
						prev={prevPlanetData}
						type={'planet'}
					/>
				</Route>
				<Route path="/">
					<HomeButtons />
				</Route>
			</Switch>
		</div>
	)
}

export default App
