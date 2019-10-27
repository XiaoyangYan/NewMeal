package com.unsw.web.mealReco.controller.service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.dao.RecipeDAO;
import com.unsw.web.mealReco.dao.SaveDetailDAO;
import com.unsw.web.mealReco.entity.Recipe;
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
	
	public int createRecipe(Recipe recipe,Users user) {
		//readRecipeDate(recipe);
		System.out.println(recipe.getLabel());
		Recipe newRecipe = recipeDAO.findByLabel(recipe.getLabel());
//		SaveDetail newSavedDetail = this.saveDetailDAO.findByUserAndRecipe(user.getUserId(), newRecipe.getRecipeId());
		if (newRecipe == null) {
			Recipe createRecipe = recipeDAO.create(recipe);
			SaveDetail sd = new SaveDetail();
			sd.setRecipe(recipe);
			sd.setUsers(user);
			createRecipe.getSavedDetails().add(sd);
			this.saveDetailDAO.create(sd);
			return createRecipe.getRecipeId();
		}
		return 0;
	}
	
//	public void readRecipeDate(Recipe recipe) {
//		DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
//		Date publishDate = null;
//		try {
//			publishDate = dateFormat.parse(recipe.getPublishDate().toString());
//		} catch(ParseException e) {
//			e.printStackTrace();
//		}
//		recipe.setPublishDate(publishDate);
//	}
}
