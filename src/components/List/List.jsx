import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></Select>
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="attractions">Atractions</MenuItem>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        ></Select>
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="attractions">Atractions</MenuItem>
      </FormControl>
    </div>
  );
};

export default List;
