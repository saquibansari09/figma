import React, { useEffect, useState } from "react";
import axios from "axios";

import configs from "../configs";
import { useData } from "../context/DataProvider";
import Loader from "./Loader";

const Filter = ({
	activeColorId,
	activeMaterialId,
	setactiveMaterialId,
	setactiveColorId,
}) => {
	const [isLoading, setisLoading] = useState(false);
	const [errMsg, seterrMsg] = useState("");

	const { filterColors, setfilterColors, filterMaterials, setfilterMaterials } =
		useData();

	const isActiveColor = (colorId) => colorId === activeColorId;
	const isActiveMaterial = (materilaId) => materilaId === activeMaterialId;

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);

				const {
					data: { colors },
				} = await axios.get(
					"https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors",
					{
						headers: {
							Authorization: "Bearer " + configs.TOKEN,
						},
					}
				);

				const { data: material } = await axios.get(
					"https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material",
					{
						headers: {
							Authorization: "Bearer " + configs.TOKEN,
						},
					}
				);

				setfilterColors(colors);
				setfilterMaterials(material.material);
			} catch (error) {
				seterrMsg("Something Went wrong!");
			} finally {
				setisLoading(false);
			}
		})();
	}, []);

	if (errMsg) {
		return (
			<center>
				<p className="text-red-500">{errMsg}</p>
			</center>
		);
	}

	if (isLoading) {
		return (
			<center>
				<Loader isLoading={true} />
			</center>
		);
	}

	return (
		<div
			className="w-[100%]"
			style={{ flex: 0.2, height: "500px", backgroundColor: "" }}>
			<div>
				<h1 className="text-black font-bold">Filter</h1>
				<h1 className="text-black pt-10 font">Material</h1>
				<ul>
					<li
						onClick={(e) => setactiveMaterialId()}
						className={`text-black capitalize cursor-pointer pt-2 ${
							!activeMaterialId ? "font-bold" : ""
						} `}>
						All
					</li>
					{filterMaterials.map((v) => (
						<li
							key={v.id}
							onClick={(e) => setactiveMaterialId(v.id)}
							className={`text-black capitalize cursor-pointer pt-2 text-bash ${
								isActiveMaterial(v.id) ? "font-bold" : ""
							}`}>
							{v.name}
						</li>
					))}
				</ul>
			</div>

			<div className="mt-16">
				<h1 className="text-black">Color</h1>
				<ul>
					<li
						onClick={(e) => setactiveColorId()}
						className={`text-black capitalize cursor-pointer pt-2 ${
							!activeColorId ? "font-bold" : ""
						}`}>
						All
					</li>
					{filterColors.map((v) => (
						<li
							onClick={(e) => setactiveColorId(v.id)}
							key={v.id}
							className={`text-black capitalize cursor-pointer pt-2 text-bash ${
								isActiveColor(v.id) ? "font-bold" : ""
							}`}>
							{v.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Filter;
