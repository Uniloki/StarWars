import React from 'react'
import Charcard from './CharacterCard'
import { Switch, Link, Route } from 'react-router-dom'

export default function InfoScreen(props) {
	const { Data, next, prev, type } = props
	return (
		<div>
			<div>
				<Link to="/"> Home </Link>
			</div>
			{Data.map((char) => {
				return <Charcard details={char} type={type} />
			})}
			<button onClick={() => prev()}> prev </button>
			<button onClick={() => next()}> next </button>
		</div>
	)
}
