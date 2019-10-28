package com.unsw.web.mealReco.dao;

import static org.junit.Assert.*;

import java.time.format.DateTimeFormatter;
import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Users;

public class RecipeDAOTest {
	
	private static EntityManagerFactory entitymanagerfactory;
	private static EntityManager entitymanager;
	private static RecipeDAO recipeDAO;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		entitymanagerfactory.close();
	}

	@SuppressWarnings("deprecation")
	@Test
	public void testCreateRecipe() {
		entitymanager = entitymanagerfactory.createEntityManager();
		Recipe recipe = new Recipe();
		recipe.setLabel("gluten free");
		recipe.setImage("testImage");
		recipe.setLastUpdateTime(new Date(2018, 10, 10));
		recipe.setPublishDate(new Date(2019, 10, 10));
		recipe.setRatings(3.6f);
		entitymanager.getTransaction().begin();
		recipe = recipeDAO.create(recipe);
		entitymanager.getTransaction().commit();
		
		assert(recipe.getRecipeId() > 0);
	}
	
	@SuppressWarnings("deprecation")
	@Test
	public void testUpdateUsers() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		Recipe recipe = new Recipe();
		recipe.setRecipeId(1);
		recipe.setLabel("gluten free");
		recipe.setImage("testImage");
		recipe.setLastUpdateTime(new Date(2018, 10, 10));
		recipe.setPublishDate(new Date(2019, 10, 10));
		recipe.setRatings(4.2f);

		recipe = recipeDAO.update(recipe);
		
		float expected = 4.2f;
		float actual = recipe.getRatings();
		
		assertEquals(expected,actual);
	}
	
	@Test
	public void testRecipenotFound() {
		int id = 90;
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		Recipe recipe = recipeDAO.get(id);
		assertNull(recipe);
		entitymanager.close();
		
	}
	

}
