import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Filter from "../components/Filter";
import Product from "../components/Product";
import ImageShowCase from "../components/ImageShowCase";
import Loader from "../components/Loader";

import { useData } from "../context/DataProvider";

const itemsPerPage = 6;

const Allproduct = () => {
	const [activeColorId, setactiveColorId] = useState();
	const [activeMaterialId, setactiveMaterialId] = useState();
	const [filteredProducts, setfilteredProducts] = useState([]);
	const [itemOffset, setItemOffset] = useState(0);

	const { isLoading, product_list } = useData();

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = filteredProducts.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
		setItemOffset(newOffset);
	};

	useEffect(() => {
		setfilteredProducts(
			product_list.filter((v) => {
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
	}, [activeColorId, activeMaterialId, product_list]);

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
						<center>
							<Loader isLoading={isLoading} />
						</center>
						{filteredProducts.length === 0 ? (
							<center>
								<h1>No Data Found!</h1>
								<h5>Try Adjusting filters!</h5>
							</center>
						) : null}
						<Product data={currentItems} />
					</div>
				</div>
				<center className="w-full flex justify-center items-center my-5">
					<ReactPaginate
						className="flex justify between gap-3 items-center"
						pageClassName="px-3 py-1 rounded-full bg-gray-300"
						activeClassName="text-white bg-gray-500"
						breakLabel="..."
						nextLabel={null}
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel={null}
						renderOnZeroPageCount={null}
					/>
				</center>
			</div>
		</React.Fragment>
	);
};
export default Allproduct;
