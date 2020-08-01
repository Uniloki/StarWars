import React from 'react'

export default function PlanetCard(props) {
	const { details, next, prev } = props
	return (
		<div>
			<p> names: {details.name} </p>
		</div>
	)
}
