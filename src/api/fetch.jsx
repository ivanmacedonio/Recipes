import React from "react";
import axios from "axios";

export const fetch = async (data, setter) => {
  const {
    Cuisine,
    Diet,
    Intolerances,
    Maxcalories,
    Maxcarbs,
    Maxprotein,
    Mincalories,
    Mincarbs,
    Minprotein,
    Type,
  } = data;

  const params = {};

  if (Cuisine) params.cuisine = Cuisine;
  if (Diet) params.diet = Diet;
  if (Intolerances) params.intolerances = Intolerances;
  if (Mincalories) params.minCalories = Mincalories;
  if (Maxcalories) params.maxCalories = Maxcalories;
  if (Type) params.type = Type;
  if (Mincarbs) params.minCarbs = Mincarbs;
  if (Maxcarbs) params.maxCarbs = Maxcarbs;
  if (Minprotein) params.minProtein = Minprotein;
  if (Maxprotein) params.maxProtein = Maxprotein;

  const queryString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const url = `https://api.spoonacular.com/recipes/complexSearch?${queryString}&number=12&apiKey=ee3f668d6cce4eb19d5678356a91532d`;

  try {
    const res = await axios.get(url);
    setter(res.data.results)
  } catch (error) {
    console.error(error);
  }

  
};
