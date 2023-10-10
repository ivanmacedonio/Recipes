import React, { useEffect, useState } from "react";
import { fetch } from "../api/fetch.jsx";
import "./PL.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { RenderProducts } from "./renderProducts.jsx";
import PositionedMenu from "./Menu.jsx";
export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    const res = fetch(data, setProducts);
  }
  return (
    <div>
      <p className="header">View valid querys</p>
      <div className="menu">
        <PositionedMenu></PositionedMenu>
      </div>
      <p className="title">
        Search a recipe! by <b>@ivanDev</b>
      </p>
      <div className="list">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="parent">
            <div className="div1">
              {" "}
              <TextField
                id="outlined-basic"
                label="Cuisine"
                variant="outlined"
                {...register("Cuisine")}
              />
            </div>
            <div className="div2">
              {" "}
              <TextField
                id="outlined-basic"
                label="Diet"
                variant="outlined"
                {...register("Diet")}
              />{" "}
            </div>
            <div className="div3">
              {" "}
              <TextField
                id="outlined-basic"
                label="Intolerances"
                variant="outlined"
                {...register("Intolerances")}
              />
            </div>
            <div className="div4">
              {" "}
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                {...register("Type")}
              />
            </div>
            <div className="div5">
              {" "}
              <TextField
                id="outlined-basic"
                label="Min carbs"
                variant="outlined"
                {...register("Min carbs")}
              />
            </div>
            <div className="div6">
              {" "}
              <TextField
                id="outlined-basic"
                label="Max carbs"
                variant="outlined"
                {...register("Max carbs")}
              />
            </div>

            <div className="div9">
              {" "}
              <TextField
                id="outlined-basic"
                label="Min calories"
                variant="outlined"
                {...register("Min calories")}
              />{" "}
            </div>
            <div className="div10">
              {" "}
              <TextField
                id="outlined-basic"
                label="Max calories"
                variant="outlined"
                {...register("Max calories")}
              />{" "}
            </div>
            <div className="div11">
              {" "}
              <TextField
                id="outlined-basic"
                label="Min protein"
                variant="outlined"
                {...register("Min protein")}
              />
            </div>
            <div className="div12">
              {" "}
              <TextField
                id="outlined-basic"
                label="Max protein"
                variant="outlined"
                {...register("Max protein")}
              />
            </div>
            <div className="div13">
              <Button variant="contained" type="submit">
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="products">
        <RenderProducts products={products}></RenderProducts>
      </div>
    </div>
  );
};
