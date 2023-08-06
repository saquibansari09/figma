import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useData } from "../context/DataProvider";

const Navbar = () => {
	const { cartItems } = useData();
	const { pathname } = useLocation();

	return (
		<React.Fragment>
			<nav className="w-[100%] fixed z-50 top-0 flex items-center justify-between list-none gap-14 px-20 py-6">
				<a className="mt-2 flex-1" href="">
					<span className="text-stone-400 font-bold ">RIGHT</span>
					<span className="text-white font-bold">FIT.COM</span>
				</a>
				<ul className="flex flex-1 justify-around">
					<li>
						<Link
							className={`text-xl text-white ${
								pathname === "/" ? "text-gray-800" : ""
							}`}
							to="/">
							All Product
						</Link>
					</li>
					<li>
						<Link
							className={`text-xl text-white ${
								pathname === "/featureproduct" ? "text-gray-800" : ""
							}`}
							to="/featureproduct">
							Featured Product
						</Link>
					</li>
					<li>
						<span className="flex text-2xl text-white">
							<AiOutlineShoppingCart />
							{cartItems.length > 0 ? (
								<sup className="bg-red-900 py-3 px-2 rounded-lg">
									{cartItems.length}
								</sup>
							) : null}
						</span>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};
export default Navbar;
