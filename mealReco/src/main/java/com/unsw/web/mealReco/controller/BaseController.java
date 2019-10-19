package com.unsw.web.mealReco.controller;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.unsw.web.mealReco.controller.service.UserServices;
@Transactional
@Service
@EnableTransactionManagement
public class BaseController {
	@PersistenceUnit
	protected EntityManagerFactory entityManagerFactory= Persistence.createEntityManagerFactory("MyMeal");
	@PersistenceContext
	protected EntityManager entityManager = entityManagerFactory.createEntityManager();
	@Autowired
	protected UserServices userService = new UserServices(this.entityManager);

	public void destroy() {
		entityManager.close();
		entityManagerFactory.close();
	}
}
