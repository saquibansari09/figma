import React from "react";

import { useData } from "../context/DataProvider";

const Product = ({ data }) => {
	const { filterMaterials, filterColors, addToCart } = useData();

	const getFilterNameFromId = (id) =>
		filterMaterials.find((v) => v.id === id)?.name;
	const getColorNameFromId = (id) => filterColors.find((v) => v.id == id)?.name;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{data.map((item) => (
				<div className="h-[70vh] font-bold relative">
					<div class="relative block h-[80%] bg-gray-900 group" href="##">
						<img
							class="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
							src={item.image}
							alt=""
						/>
						<div class="relative p-5">
							<div class="mt-40">
								{/* Hidden content */}
								<div
									class="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
									<div class="p-2">
										<center>
											<button
												onClick={() => addToCart(item)}
												class="px-4 py-2 text-sm
                                            text-white ">
												Add To Cart
											</button>
										</center>
									</div>
								</div>
								{/* End of hidden content */}
							</div>
						</div>
					</div>
					<div className="mb-3">
						<h6 className="text-xl font-normal">{item.name}</h6>
						<p className="flex gap-2">
							<b className="uppercase" style={{ fontWeight: 600 }}>
								{getColorNameFromId(item.colorId)}
							</b>
							<span className="font-normal uppercase">
								{getFilterNameFromId(item.materialId)}
							</span>
						</p>
					</div>
					<p>INR {item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Product;
