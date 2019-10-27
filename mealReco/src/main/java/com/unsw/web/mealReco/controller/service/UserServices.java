package com.unsw.web.mealReco.controller.service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.dao.UserDAO;
import com.unsw.web.mealReco.entity.Users;
@Transactional
@Service
public class UserServices {
	
	private UserDAO userDAO;
	
	public UserServices(EntityManager entityManager) {
		userDAO = new UserDAO(entityManager);
	}
	
	public Users registerUser(String username, String password, String email) {
		Users existUser = userDAO.findByEmail(email);
		if (existUser == null) {
			Users newUser = new Users(username, password, email);
			userDAO.create(newUser);
			Users resultUser = userDAO.findByEmail(email);
			return resultUser;
		}
		return existUser;
	}
	
	public String loginUser(String email, String password) {
		boolean loginResult = userDAO.checkLogin(email, password);
		Users user = userDAO.findByEmail(email);
		if (user == null) {
			System.out.println("user");
		}
		if (loginResult) {
			return "valid";
		} else {
			return "invalid";
		}
	}
	
	public String getUserName(String email) {
		return userDAO.findByEmail(email).getFullName();
	}
}
