package com.unsw.web.mealReco.dao;

import static org.junit.Assert.*;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.unsw.web.mealReco.entity.Recipe;

public class RecipeDAOTest {
	private static EntityManagerFactory entitymanagerfactory;
	private static EntityManager entitymanager;
	private static RecipeDAO recipedao;
	
	@BeforeClass
	public static void setupClass() {
		entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
		entitymanager = entitymanagerfactory.createEntityManager();
		recipedao = new RecipeDAO(entitymanager);
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		entitymanagerfactory.close();
	}

	@SuppressWarnings("deprecation")
	@Test
	public void testCreateRecipe() {
		entitymanager = entitymanagerfactory.createEntityManager();
		recipedao = new RecipeDAO(entitymanager);
		Recipe recipe = new Recipe();
		recipe.setLabel("label10");
		recipe.setImage("testImage10");
		recipe.setLastUpdateTime(new Date(118, 9, 10));
		recipe.setPublishDate(new Date(119, 10, 10));
		recipe.setRatings(4);
		entitymanager.getTransaction().begin();
		recipe = recipedao.create(recipe);
		entitymanager.getTransaction().commit();
		
		
		assertTrue(recipe.getRecipeId() > 0);
		
	}

}
