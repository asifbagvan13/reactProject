
import React from "react";

function Nav() {
	

	return (
		<nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<span className="text-2xl font-bold text-red-600">Netflix</span>
				<a href="#" className="hover:text-red-400">Home</a>
				<a href="#" className="hover:text-red-400">TV Shows</a>
				<a href="#" className="hover:text-red-400">Movies</a>
				<a href="#" className="hover:text-red-400">My List</a>
			</div>
			<div>
				<button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition mx-6">Sign In</button>
                <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">Sign Up</button>
			</div>
		</nav>
	);
}

export default Nav;