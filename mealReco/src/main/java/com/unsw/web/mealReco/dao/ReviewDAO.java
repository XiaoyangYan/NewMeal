package com.unsw.web.mealReco.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.entity.Review;
@Transactional
@Service
public class ReviewDAO extends JpaDAO<Review> implements GenericDAO<Review>{

	public ReviewDAO(EntityManager entityManager) {
		super(entityManager);
		// TODO Auto-generated constructor stub
	}

	@Override
	@Transactional
	public Review get(Object id) {
		// TODO Auto-generated method stub
		return super.find(Review.class, id);
	}

	@Override
	@Transactional
	public void delete(Object id) {
		// TODO Auto-generated method stub
		super.delete(Review.class, id);
	}

	@Override
	@Transactional
	public List<Review> listAll() {
		// TODO Auto-generated method stub
		return super.findWithNamedQuery("Review.findAll");
	}

	@Override
	@Transactional
	public long count() {
		// TODO Auto-generated method stub
		return super.countWithNamedQuery("Review.countAll");
	}

	@Transactional
	public Review findByUserAndRecipe(int userId, int recipeId) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("userId", userId);
		parameters.put("recipeId", recipeId);
		
		List<Review> result = super.findWithNamedQuery("Review.findByUserAndRecipe", parameters);
		if (!result.isEmpty()) {
			return result.get(0);
		}
		return null;
	}

}
