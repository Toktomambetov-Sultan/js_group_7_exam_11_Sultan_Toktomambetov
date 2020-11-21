import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import config from "../../config";

const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",
  },
  right: {
    flexGrow: "1",
    paddingLeft: "10px",
  },
  Image: {
    width: "250px",
    height: "250px",
  },
  Bottom: {
    paddingBottom: "10px",
  },
}));

const ProductItem = ({ product, onDelete, hide, onClick, user }) => {
  const classes = useStyles();
  return (
    <Box m={1} bgcolor="lightblue" padding="10px" borderRadius="5px">
      <Grid container direction={hide ? "column" : "row"}>
        <img
          className={classes.Image}
          src={config.ImageUrl + product?.image}
          alt={product?.title || "image"}
        />
        <Grid item className={classes.right}>
          <Grid container justify="space-between">
            <div className={classes.Bottom}>
              <Typography variant="h5" color="primary">
                {product?.title}
              </Typography>
              {!hide && (
                <Typography variant="h6">
                  Seller: {product?.user.displayName}
                </Typography>
              )}
              <Typography variant="h6">
                Category: {product?.category.name}
              </Typography>
              <Box hidden={hide}>
                <Typography variant="h6">
                  Phone number: {product?.user.phoneNumber}
                </Typography>
              </Box>
            </div>
            <Typography variant="button">Price: {product?.price}$</Typography>
          </Grid>
          {!hide && (
            <Typography variant="subtitle1">
              <Typography variant="h6">Description:</Typography>
              <p>{product?.description}</p>
            </Typography>
          )}
          <Box hidden={!hide} m={1} textAlign="start">
            <Button variant="outlined" onClick={onClick} color="primary">
              See more information
            </Button>
          </Box>
          <Box hidden={product?.user._id !== user?._id} textAlign="end">
            <Button variant="outlined" onClick={onDelete} color="secondary">
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductItem;
