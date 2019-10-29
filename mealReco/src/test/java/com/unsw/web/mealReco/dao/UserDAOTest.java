package com.unsw.web.mealReco.dao;

import static org.junit.Assert.*;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.unsw.web.mealReco.entity.Users;

public class UserDAOTest {
	private static EntityManagerFactory entitymanagerfactory;
	private static EntityManager entitymanager;
	private static UserDAO userdao;
	
	@BeforeClass
	public static void setupClass() {
		entitymanagerfactory = Persistence.createEntityManagerFactory("MyMeal");
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
	}
	@Test
	public void testCreateUsers() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		Users user = new Users();
		user.setEmail("12345679@qq.com");
		user.setFullName("tommy");
		user.setPassword("375509228");
		entitymanager.getTransaction().begin();
		user = userdao.create(user);
		entitymanager.getTransaction().commit();

		
		assertTrue(user.getUserId() > 0);
		
	}
	@Test
	public void testUpdateUsers() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		Users user = new Users();
		user.setUserId(3);
		user.setEmail("9872@qq.com");
		user.setFullName("jiakangzhang");
		user.setPassword("12345678");

		user = userdao.update(user);
		String expected = "12345678";
		String actual = user.getPassword();
		
		assertEquals(expected,actual);
	}
	
	@Test
	public void testUsernotFound() {
		int id = 90;
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		Users user = userdao.get(id);
		assertNull(user);
		entitymanager.close();
		
	}
	
	@Test
	public void testDeleteUser() {
		int id = 19;
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		entitymanager.getTransaction().begin();
		userdao.delete(id);//in delete use .close()
		entitymanager.getTransaction().commit();
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		Users user = userdao.get(id);
		assertNull(user);
		entitymanager.close();
	
	}
	
	@Test
	public void testListAll() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		List<Users> listusers = userdao.listAll();
		for(Users user: listusers) {
			System.out.println(user.getEmail());
			
		}
		assertTrue(listusers.size()>0);
		entitymanager.close();
	}
	@Test
	public void testCount() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		long total = userdao.count();
		
		assertTrue(total > 5);
	}
	@Test
	public void testFindByEmail() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		String email = "9872@qq.com";
		Users user = userdao.findByEmail(email);
		assertNotNull(user);
	}
	
	@Test
	public void testLogin() {
		entitymanager = entitymanagerfactory.createEntityManager();
		userdao = new UserDAO(entitymanager);
		String email = "9872@qq.com";
		String password = "12345678";
		Boolean tag = userdao.checkLogin(email, password);
		assertTrue(tag = true);
		
		
		
	}
	@AfterClass
	public static void tearDownClass() {
		entitymanagerfactory.close();
	}
	

}