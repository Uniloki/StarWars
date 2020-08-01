import React from 'react'

export default function CharCard(props) {
	const { details, type } = props
	if (type == 'people') {
		return (
			<div>
				<p> Name : {details.name} </p>
				<p> Hair: {details.hair_color} </p>
			</div>
		)
	}

	if (type == 'planet') {
		return (
			<div>
				<p> ame : {details.name} </p>
			</div>
		)
	}
}
