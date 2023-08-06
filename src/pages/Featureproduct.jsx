import React, { useEffect, useState } from "react";
import axios from "axios";

import Filter from "../components/Filter";
import Product from "../components/Product";
import ImageShowCase from "../components/ImageShowCase";
import Loader from "../components/Loader";

import { useData } from "../context/DataProvider";
import configs from "../configs";

const FeaturedProducts = () => {
	const [activeColorId, setactiveColorId] = useState();
	const [activeMaterialId, setactiveMaterialId] = useState();
	const [filteredProducts, setfilteredProducts] = useState([]);
	const [products, setproducts] = useState([]);
	const [isLoading, setisLoading] = useState(false);

	const { isLoading: is_all_products_loading, product_list } = useData();

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const {
					data: { featured },
				} = await axios.get(
					"https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured",
					{
						headers: {
							Authorization: "Bearer " + configs.TOKEN,
						},
					}
				);

				const mappedProducts = featured.map((f) => ({
					...product_list.find((p) => p.id === f.productId),
					f_id: f.id,
					productId: f.productId,
				}));

				setproducts(mappedProducts);
				setfilteredProducts(mappedProducts);
			} catch (error) {
				alert("Something went wrong while getting the products!");
			} finally {
				setisLoading(false);
			}
		})();
	}, [product_list]);

	useEffect(() => {
		setfilteredProducts(
			products.filter((v) => {
				if (activeColorId && activeMaterialId) {
					return (
						activeColorId === v.colorId && activeMaterialId === v.materialId
					);
				}

				if (activeColorId) {
					return activeColorId === v.colorId;
				}

				if (activeMaterialId) {
					return v.materialId === activeMaterialId;
				}

				return true;
			})
		);
	}, [activeColorId, activeMaterialId, products]);

	if (is_all_products_loading) {
		return (
			<div className="p-10">
				<center className="w-full">
					<Loader isLoading={true} />
				</center>
			</div>
		);
	}

	return (
		<React.Fragment>
			<ImageShowCase />

			<div className="p-10">
				<div className="flex justify-between" style={{ gap: "1rem" }}>
					<Filter
						activeColorId={activeColorId}
						activeMaterialId={activeMaterialId}
						setactiveColorId={setactiveColorId}
						setactiveMaterialId={setactiveMaterialId}
					/>
					<div style={{ flex: 0.8 }}>
						<Loader isLoading={isLoading} />
						{filteredProducts.length === 0 ? (
							<center>
								<h1>No Data Found!</h1>
								<h5>Try Adjusting filters!</h5>
							</center>
						) : null}
						<Product data={filteredProducts} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default FeaturedProducts;
