package com.unsw.web.mealReco.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.unsw.web.mealReco.entity.Recipe;

public class RecipeDAO extends JpaDAO<Recipe> implements GenericDAO<Recipe>{

	public RecipeDAO(EntityManager entityManager) {
		super(entityManager);
	}
	
	@Override
	@Transactional
	public Recipe create(Recipe recipe) {
		return super.create(recipe);
	}

	@Override
	@Transactional
	public Recipe get(Object id) {
		return super.find(Recipe.class,id);
	}

	@Override
	@Transactional
	public void delete(Object id) {
		super.delete(Recipe.class, id);
	}
	
	@Override
	@Transactional
	public Recipe update(Recipe recipe) {
		return super.update(recipe);
	}

	@Override
	@Transactional
	public List<Recipe> listAll() {
		return super.findWithNamedQuery("Recipe.findAll");
	}

	@Override
	@Transactional
	public long count() {
		return super.countWithNamedQuery("Recipe.countAll");
	}
	

	public List<Recipe> listByLabel(String label) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("label", label);
		List<Recipe> result = super.findWithNamedQuery("Review.findByLabel", parameters);
		
		if (!result.isEmpty()) {
			return result;
		}
		return null;
	}

}
