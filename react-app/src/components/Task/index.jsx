import React from "react";
import { GoCheck, GoTrashcan } from "react-icons/go";

export default function Task({ value }) {
	return (
		<li>
			<button><GoCheck /></button>
			<span>{value}</span>
			<button><GoTrashcan /></button>
		</li>
	)
}
