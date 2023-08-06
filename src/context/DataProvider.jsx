import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

import configs from "../configs";

const DataContext = createContext();

const LOCAL_CART_KEY = "figmaapp:cart";

const DataProvider = ({ children }) => {
	const [filterColors, setfilterColors] = useState([]);
	const [filterMaterials, setfilterMaterials] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [product_list, setproduct_list] = useState([]);

	const stringifyCart = localStorage.getItem(LOCAL_CART_KEY);

	const [cartItems, setcartItems] = useState(
		stringifyCart ? JSON.parse(stringifyCart) : []
	);

	const addToCart = (item) => {
		setcartItems((prev) => {
			const index = cartItems.findIndex((v) => v.id === item.id);
			if (index > -1) {
				prev[index] = { ...item, qty: item.qty + 1 };
				return [...prev];
			}

			const d = [...prev, { ...item, qty: 1 }];
			localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(d));
			return d;
		});
	};

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const {
					data: { products },
				} = await axios.get(
					"https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
					{
						headers: {
							Authorization: "Bearer " + configs.TOKEN,
						},
					}
				);

				setproduct_list(products);
			} catch (error) {
				alert("Something went wrong while getting the products!");
			} finally {
				setisLoading(false);
			}
		})();
	}, []);

	const values = {
		filterColors,
		setfilterColors,
		filterMaterials,
		setfilterMaterials,
		isLoading,
		product_list,
		cartItems,
		addToCart,
	};
	return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;

export const useData = () => useContext(DataContext);
