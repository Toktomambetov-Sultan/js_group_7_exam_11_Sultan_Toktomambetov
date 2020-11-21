import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import FileUploader from "../UI/FileUploader/FileUploader";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "30px",
    width: "400px",
  },
  Bottom: {
    padding: "30px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fileUploader: {
    maxWidth: "500px",
  },
  select: {
    minWidth: "300px",
  },
}));

const ProductForm = ({ onSubmit, onChange, error, product }) => {
  const classes = useStyles();
  const categories = useSelector((state) => state.category.data);
  return (
    <Container component="main" maxWidth="md">
      <Box textAlign="center">
        <Typography variant="h5">Add new product</Typography>
        <form onSubmit={onSubmit}>
          <TextField
            margin="normal"
            className={classes.title}
            error={!!error?.title}
            label={error?.title?.message || "Title"}
            name="title"
            autoFocus
            value={product.title}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={!!error?.description}
            label={error?.description?.message || "Description"}
            fullWidth
            multiline
            rows={7}
            value={product.description}
            onChange={onChange}
            name="description"
          />
          <div className={classes.Bottom}>
            <div className={classes.fileUploader}>
              <FileUploader
                name="image"
                onChange={onChange}
                error={!!error?.image}
                label={error?.image?.message || "image"}
              />
            </div>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Category
              </InputLabel>
              <Select
                native
                onChange={onChange}
                label="Category"
                className={classes.select}
                defaultValue={categories[0]?._id}
                inputProps={{
                  name: "category",
                  id: "outlined-age-native-simple",
                }}
              >
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>

          <Box marginTop={2} width="300px" display="inline-block">
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductForm;
