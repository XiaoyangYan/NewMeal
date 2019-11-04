package com.unsw.web.mealReco.dao;

import static org.junit.Assert.*;

import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

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

	@SuppressWarnings("deprecation")
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		for (int i = 0; i < 3; i++) {
			entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
			entitymanager = entitymanagerfactory.createEntityManager();
			recipeDAO = new RecipeDAO(entitymanager);
			Recipe recipe = new Recipe();
			recipe.setLabel("label" + i);
			recipe.setImage("testImage");
			recipe.setLastUpdateTime(new Date(118, 9, 10));
			recipe.setPublishDate(new Date(119, 10, 10));
			recipe.setRatings(3.7f);
			entitymanager.getTransaction().begin();
			recipe = recipeDAO.create(recipe);
			entitymanager.getTransaction().commit();
		}
	}


	@SuppressWarnings("deprecation")
	@Test
	public void testCreateRecipe() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		Recipe recipe = new Recipe();
		recipe.setLabel("label10");
		recipe.setImage("testImage10");
		recipe.setLastUpdateTime(new Date(118, 9, 10));
		recipe.setPublishDate(new Date(119, 10, 10));
		recipe.setRatings(3.7f);
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
		int recipeId = recipeDAO.findByLabel("label10").getRecipeId();
		Recipe recipe = new Recipe();
		recipe.setRecipeId(recipeId);
		recipe.setLabel("label10");
		recipe.setImage("testImageUpdate");
		recipe.setLastUpdateTime(new Date(118, 9, 10));
		recipe.setPublishDate(new Date(119, 10, 10));
		recipe.setRatings(3.7f);

		recipe = recipeDAO.update(recipe);
		
		String expected = "testImageUpdate";
		String actual = recipe.getImage();
		
		assertEquals(expected,actual);
	}
	
	@Test
	public void testRecipenotFound() {
		int id = 290;
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		Recipe recipe = recipeDAO.get(id);
		assertNull(recipe);
		entitymanager.close();
		
	}
	
	@Test
	public void testDeleteUser() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		int recipeId = recipeDAO.findByLabel("label10").getRecipeId();
		entitymanager.getTransaction().begin();
		recipeDAO.delete(recipeId);//in delete use .close()
		entitymanager.getTransaction().commit();
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		Recipe recipe = recipeDAO.get(recipeId);
		assertNull(recipe);
		entitymanager.close();
	}

	@Test
	public void testListAll() {
		
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		List<Recipe> listrecipes = recipeDAO.listAll();
		for(Recipe recipe: listrecipes) {
			System.out.println(recipe.getLabel());
		}
		
		System.out.println("size = " + listrecipes.size());
		assertTrue(listrecipes.size()>=3);
		entitymanager.close();
	}
	
	@Test
	public void testCount() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		long total = recipeDAO.count();
		assertTrue(total >=3);
	}
	
	@Test
	public void testFindByLabel() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		String actual = recipeDAO.findByLabel("label1").getLabel();
		String expect = "label1";
		assertEquals(actual, expect);
	}
	
	@Test
	public void testlistSavedRecipe() {
		int id = 2;
		entitymanager = entitymanagerfactory.createEntityManager();
		recipeDAO = new RecipeDAO(entitymanager);
		List<Recipe> savedRecipe = recipeDAO.listSavedRecipe(id);
		assertTrue(savedRecipe.size()>=0);
	}
	
	
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		entitymanagerfactory.close();
	}
	

}

