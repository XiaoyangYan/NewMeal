package com.unsw.web.mealReco.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.SaveDetail;

public class SaveDetailDAO extends JpaDAO<SaveDetail> implements GenericDAO<SaveDetail>{

	public SaveDetailDAO(EntityManager entityManager) {
		super(entityManager);
		// TODO Auto-generated constructor stub
	}

	@Override
	@Transactional
	public SaveDetail create(SaveDetail sd) {
		return super.create(sd);
	}
	
	@Override
	@Transactional
	public SaveDetail get(Object id) {
		return super.find(SaveDetail.class, id);
	}

	@Override
	@Transactional
	public void delete(Object id) {
		super.delete(SaveDetail.class, id);
	}

	@Override
	public List<SaveDetail> listAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}
	@Transactional
	public SaveDetail findByUserAndRecipe(int userId, int recipeId) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("userId", userId);
		parameters.put("recipeId", recipeId);
		
		List<SaveDetail> result = super.findWithNamedQuery("SaveDetail.findByUserAndRecipe", parameters);
		if (!result.isEmpty()) {
			return result.get(0);
		}
		return null;
	}

}
