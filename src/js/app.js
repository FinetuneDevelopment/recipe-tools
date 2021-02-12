"use strict";

import "../scss/app.scss";
import recipe from "./components/recipe.js";
import addField from "./components/add-field.js";

const myRecipe = new recipe();
myRecipe.init();

const myAddField = new addField();
myAddField.init();
