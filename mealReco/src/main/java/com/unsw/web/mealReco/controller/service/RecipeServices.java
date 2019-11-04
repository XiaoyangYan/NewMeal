package com.unsw.web.mealReco.controller.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.dao.RecipeDAO;
import com.unsw.web.mealReco.dao.SaveDetailDAO;
import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.SaveDetail;
import com.unsw.web.mealReco.entity.Users;

@Transactional
@Service
public class RecipeServices {

	private RecipeDAO recipeDAO;
	private SaveDetailDAO saveDetailDAO;
	public RecipeServices(EntityManager entityManager) {
		this.recipeDAO = new RecipeDAO(entityManager);
		this.saveDetailDAO = new SaveDetailDAO(entityManager);
	}
	
	public int createSavedRecipe(Recipe recipe,Users user) {
		//readRecipeDate(recipe);
		System.out.println(recipe.getLabel());
		Recipe newRecipe = recipeDAO.findByLabel(recipe.getLabel());
		if (newRecipe == null) {
			Recipe createRecipe = recipeDAO.create(recipe);
			SaveDetail sd = new SaveDetail();
			sd.setRecipe(recipe);
			sd.setUsers(user);
			this.saveDetailDAO.create(sd);
			return createRecipe.getRecipeId();
		}
		return 0;
	}
	
	public Recipe getRecipe(String label) {
		return recipeDAO.findByLabel(label);
	}
	
	public List<Recipe> getSavedRecipeList(Users user) {
		List<SaveDetail> recipes = this.saveDetailDAO.userSaving(user.getUserId());
		List<Recipe> results = new ArrayList<Recipe>();
		if (recipes == null) {
			return results;
		}
		for(int i = 0; i < recipes.size(); i++) {
			Recipe recipe = this.recipeDAO.find(Recipe.class, recipes.get(i));
			results.add(recipe);
		}
		return results;
	}
	
	public void updateReciple(Recipe recipe) {
		recipeDAO.update(recipe);
	}
	public void deleteReciple(int id) {
		recipeDAO.delete(id);
	}
	public List<Recipe> listMostFavoredRecipes(){
		List<Recipe> mostFavoredRecipes = recipeDAO.listMostFavoredRecipes();
		return mostFavoredRecipes;
	}

	public void updateRating(float average, Recipe recipe) {
		recipe.setRatings(average);
		this.recipeDAO.update(recipe);

	}
	

	public void updateReciple(Recipe recipe) {
		recipeDAO.update(recipe);
	}
	public void deleteReciple(int id) {
		recipeDAO.delete(id);
	}
	public List<Recipe> listMostFavoredRecipes(){
		List<Recipe> mostFavoredRecipes = recipeDAO.listMostFavoredRecipes();
		return mostFavoredRecipes;
	}

}
