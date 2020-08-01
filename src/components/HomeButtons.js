import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'

export default function HomeButtons(props) {
	return (
		<div>
			<div>
				<Link to="/characters"> Characters</Link>
			</div>
			<div>
				<Link to="/planets"> Planets</Link>
			</div>
		</div>
	)
}
