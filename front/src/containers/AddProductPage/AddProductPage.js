import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../../components/ProductForm/ProductForm";
import { postProductData } from "../../store/shop/shopActions";
import { getCategoryData } from "../../store/category/categoryActions";

const AddProductPage = () => {
  const categories = useSelector((state) => state.category.data);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.main);
  const userState = useSelector((state) => state.user);

  const [currentProduct, setCurrentProduct] = useState({
    title: "",
    description: "",
    image: null,
    category: categories[0]?._id,
  });

  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);

  const postProductDataHandler = (data) => dispatch(postProductData(data));

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(currentProduct).forEach((key) => {
      formData.append(key, currentProduct[key]);
    });
    postProductDataHandler(formData);
  };

  const onFormChange = (event) => {
    const { name } = event.target;
    let value;
    switch (name) {
      case "image":
        value = event.target.files[0];
        break;
      default:
        value = event.target.value;
    }
    setCurrentProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(state.error?.errors);
  return (
    userState.user && (
      <ProductForm
        onChange={onFormChange}
        product={currentProduct}
        error={state.error?.errors}
        onSubmit={onFormSubmit}
      />
    )
  );
};

export default AddProductPage;
