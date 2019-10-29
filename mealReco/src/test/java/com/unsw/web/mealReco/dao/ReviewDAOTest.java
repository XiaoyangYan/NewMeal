package com.unsw.web.mealReco.dao;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.Users;

public class ReviewDAOTest {
	private static ReviewDAO reviewDao;
	private static EntityManagerFactory entitymanagerfactory;
	private static EntityManager entitymanager;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		entitymanagerfactory.close();
	}

	@SuppressWarnings("deprecation")
	@Test
	public void testCreateReview() {
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		Review review = new Review();
		
		Recipe recipe = new Recipe();
		recipe.setRecipeId(1);
		
		Users user = new Users();
		user.setUserId(20);
		review.setComment("yes yes nice recipe");
		review.setRecipe(recipe);
		review.setUsers(user);
		review.setHeadline("the recipe is amazing and healthy");
		review.setRating(5);
		review.setRating(5);
		review.setReviewTime(new Date(118, 9, 10));
		entitymanager.getTransaction().begin();
		Review saved = reviewDao.create(review);
		entitymanager.getTransaction().commit();
		
		assert(saved.getReviewId()>0);
		
		
	}

	@Test
	public void testUpdateReview() {
		int id = 1;
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		Review review = reviewDao.get(id);
		review.setHeadline("wdnmd");
		Review saved = reviewDao.update(review);
		
		assertEquals(review.getHeadline(),saved.getHeadline());
		
	}

	@Test
	public void testGet() {
		int id = 1;
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		Review review = reviewDao.get(id);
		assertNotNull(review);
		
	}

	@Test
	public void testDeleteObject() {
		int id = 4;
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		entitymanager.getTransaction().begin();
		reviewDao.delete(id);
		entitymanager.getTransaction().commit();
		
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		Review review = reviewDao.get(id);
		
		assertNull(review);
		
	}

	@Test
	public void testListAll() {
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		List<Review> listreview = reviewDao.listAll();
		
		for(Review review:listreview) {
			System.out.println(review.getReviewId());
		}
		assertTrue(listreview.size()>0);
	}

	@Test
	public void testCount() {
		entitymanager = entitymanagerfactory.createEntityManager();
		reviewDao = new ReviewDAO(entitymanager);
		
		long count = reviewDao.count();
		assertTrue(count>0);

	}

}
