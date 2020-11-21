import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getCategoryData } from "../../store/category/categoryActions";
import {
  deleteProductData,
  getProductData,
} from "../../store/shop/shopActions";

const useStyles = makeStyles((theme) => ({
  products: {
    flexGrow: "1",
    display: "flex",
  },
}));

const ProductsPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.data);
  const products = useSelector((state) => state.shop.data);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(
      getProductData(
        props.match.params.id === "all"
          ? ""
          : "?category=" + props.match.params.id
      )
    );
    dispatch(getCategoryData());
  }, [dispatch, props.match.params.id]);
  const onDelete = (id) => {
    dispatch(deleteProductData(id));
  };
  const onClick = (id) => {
    props.history.push({
      pathname: "/product/" + id,
    });
  };
  return (
    <Grid container justify="space-between" alignItems="stretch">
      <Sidebar categories={categories} />
      <div className={classes.products}>
        {products.map((product) => (
          <ProductItem
            product={product}
            onDelete={() => onDelete(product._id)}
            onClick={() => onClick(product._id)}
            key={product._id}
            user={user}
            hide
          />
        ))}
      </div>
    </Grid>
  );
};
export default ProductsPage;
