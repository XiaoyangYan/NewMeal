package com.unsw.web.mealReco.controller.service;


import javax.persistence.EntityManager;

import com.unsw.web.mealReco.dao.RecipeDAO;

public class RecipeServices {

	private RecipeDAO recipeDAO;
	
	public RecipeServices(EntityManager entityManger) {
		this.recipeDAO = new RecipeDAO(entityManger);

	}

}
