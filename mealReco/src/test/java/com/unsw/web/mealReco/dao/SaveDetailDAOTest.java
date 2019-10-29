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
import com.unsw.web.mealReco.entity.SaveDetail;

public class SaveDetailDAOTest {
	
	private static EntityManagerFactory entitymanagerfactory;
	private static EntityManager entitymanager;
	private static SaveDetailDAO savedetailDAO;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		for (int i = 0; i < 3; i++) {
			entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
			entitymanager = entitymanagerfactory.createEntityManager();
			savedetailDAO = new SaveDetailDAO(entitymanager);
			SaveDetail sd = new SaveDetail();
			entitymanager.getTransaction().begin();
			entitymanager.getTransaction().commit();
		}
		
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		entitymanagerfactory.close();
	}

	@Test
	public void test() {
		fail("Not yet implemented");
	}

}
