import { createContext } from "react";
import { useArray, useBoolean } from "../custom-hooks";
import RECIPEJSON from "../../assets/configs/recipes.json";

const recipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const { isTruthy: isShowingAllRecipes, toggleTruthy: toggleIsShowingAllRecipes } = useBoolean();
  const { arr: allRecipes } = useArray(RECIPEJSON);
  const { arr: filteredRecipes } = useArray();
  console.log(allRecipes);
  return (
    <recipeContext.Provider value={{ allRecipes, filteredRecipes }}>
      {children}
    </recipeContext.Provider>
  )
}

export default recipeContext;
