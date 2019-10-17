package com.unsw.web.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.unsw.web.entity.Users;

public class UserDAO extends JpaDAO<Users> implements GenericDAO<Users> {

	public UserDAO(EntityManager entityManager) {
		super(entityManager);
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Users create(Users t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users update(Users t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users get(Users t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Object id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Users> listAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
