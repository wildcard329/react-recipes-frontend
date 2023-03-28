import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home, Recipe, Recipes, MealPlanner } from "./pages";

const AppRouter = () => 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/:id" element={<Recipe />} />
    <Route path="/planner" element={<MealPlanner />} />
  </Routes>

export default AppRouter;
