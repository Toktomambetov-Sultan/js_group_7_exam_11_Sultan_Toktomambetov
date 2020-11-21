import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import { getProductData } from "../../store/shop/shopActions";

const ProductPage = (props) => {
  const products = useSelector((state) => state.shop.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData("?_id=" + props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <div>
      <ProductItem product={products[0]} />
    </div>
  );
};

export default ProductPage;
