import React from "react";
import { useState } from "react";

function Card(props) {
    const [hasLiked, setHasLiked] = useState(false);


	return (
		<div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-48 m-2 transform hover:scale-105 transition-transform duration-200">
			<img
				src={props.image}
				alt={props.title}
				className="w-full h-64 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-lg font-bold text-white mb-2 truncate">{props.title}</h3>
				<p className="text-gray-300 text-sm line-clamp-2">{props.description}</p>

<button  className="mt-4 bg-blue-500 text-white py-1 px-2 rounded border-2 border-white hover:bg-red-500 transition-colors duration-300">
  Watch Now
</button>

   <button onClick={() => setHasLiked(!hasLiked)} className="text-2xl focus:outline-none mx-3">
    {hasLiked ? "❤️" : "🤍"}
  </button>
  
</div>
</div>
	);
}

export default Card;
