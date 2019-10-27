package com.unsw.web.mealReco.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.entity.Recipe;
@Transactional
@Service
public class RecipeDAO extends JpaDAO<Recipe> implements GenericDAO<Recipe>{

	public RecipeDAO(EntityManager entityManager) {
		super(entityManager);
	}
	@Override
	@Transactional
	public Recipe create(Recipe r) {
		return super.create(r);
	}

	@Override
	@Transactional
	public void delete(Object id) {
		super.delete(Recipe.class, id);
	}

	@Override
	@Transactional
	public List<Recipe> listAll() {
		// TODO Auto-generated method stub
		return super.findWithNamedQuery("Recipe.findAll");
	}

	@Override
	@Transactional
	public long count() {
		// TODO Auto-generated method stub
		return super.countWithNamedQuery("Recipe.countAll");
	}
	@Transactional
	public Recipe findByLabel(String label) {
		List<Recipe> result = super.findWithNamedQuery("Recipe.findByLabel", "label", label);
		if (!result.isEmpty() && result.size()>0) {
			return result.get(0);
		}
		return null;
	}
	@Override
	@Transactional
	public Recipe get(Object id) {
		// TODO Auto-generated method stub
		Recipe recipe = super.find(Recipe.class, id);
		return recipe;
	}
	
	@Transactional
	public List<Recipe> listSavedRecipe(int userId){
		List<Recipe> savedRecipe = super.findWithNamedQuery("SaveDetail.userSaving", 
				"userId", userId);
		return savedRecipe;
	}

}
