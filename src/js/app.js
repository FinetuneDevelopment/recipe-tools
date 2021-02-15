"use strict";

import "../scss/app.scss";
import "./polyfills/closest.js";
import recipe from "./components/recipe.js";
import addField from "./components/add-field.js";
import checkShow from "./components/check-show.js";
import populateFields from "./components/populate-fields.js";

const myRecipe = new recipe();
myRecipe.init();

const myAddField = new addField();
myAddField.init();

const myCheckShow = new checkShow();
myCheckShow.init();

const myPopulateFields = new populateFields();
myPopulateFields.init();
