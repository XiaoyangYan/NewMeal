package com.unsw.web.mealReco.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.entity.Users;
@Transactional
@Service
public class UserDAO extends JpaDAO<Users> implements GenericDAO<Users> {

	public UserDAO(EntityManager entityManager) {
		super(entityManager);
	}
	@Override
	@Transactional
	public Users create(Users user) {
		// TODO Auto-generated method stub
		return super.create(user);
	}

	@Override
	@Transactional
	public Users update(Users user) {
		// TODO Auto-generated method stub
		return super.update(user);
	}

	@Override
	@Transactional
	public Users get(Object userId) {
		// TODO Auto-generated method stub
		return super.find(Users.class, userId);
	}

	@Override
	@Transactional
	public void delete(Object id) {
		// TODO Auto-generated method stub
		super.delete(Users.class,id);
	}

	@Override
	@Transactional
	public List<Users> listAll() {
		// TODO Auto-generated method stub
		return super.findWithNamedQuery("Users.findAll");
	}
	
	@Override
	@Transactional
	public long count() {
		return super.countWithNamedQuery("Users.countAll");
	}
	
	public Users findByEmail(String email) {
		List<Users> listUsers = super.findWithNamedQuery("Users.findByEmail", "email", email);
		if (listUsers != null && listUsers.size() > 0) {
			return listUsers.get(0);
		}
		return null;
	}
	
	public boolean checkLogin(String email, String password) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("email", email);
		parameters.put("password", password);
		List<Users> listUsers = super.findWithNamedQuery("Users.checkLogin",parameters);
		if (listUsers.size() == 1) {
			return true;
		}
		return false;
	}
}
