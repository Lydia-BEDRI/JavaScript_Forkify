import * as model from './model';
import recipeView from './views/recipeView';
import 'core-js/stable';
import 'regenerator-runtime'
import searchView from './views/searchView';
import resultsView from './views/resultsView';


// https://forkify-api.herokuapp.com/v2


if (module.hot) {
  module.hot.accept();
}

const controllRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) {
      return;
    }

    recipeView.renderSpinner();

    // 1 Loading recipe
    await model.loadRecipe(id);


    // 2 rendering recipe 
    recipeView.render(model.state.recipe);


  } catch (err) {
    recipeView.renderError();
  }

};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1 Get search query
    const query = searchView.getQuery();

    if (!query) return;
    // 2 Load search
    await model.loadSearchResults(query);

    // 3 Render results
    // console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
}

const init = function () {
  recipeView.addHandlerRender(controllRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();