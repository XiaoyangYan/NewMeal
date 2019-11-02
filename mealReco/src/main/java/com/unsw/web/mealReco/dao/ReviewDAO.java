package com.unsw.web.mealReco.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.unsw.web.mealReco.entity.Review;

import org.springframework.stereotype.Service;
@Transactional
@Service
public class ReviewDAO extends JpaDAO<Review> implements GenericDAO<Review>{

	public ReviewDAO(EntityManager entityManager) {
		super(entityManager);

	}

	@Override
	@Transactional
	public Review create(Review review) {
		review.setReviewTime(new Date());
		return super.create(review);
	}
	
	@Override
	@Transactional
	public Review update(Review review) {
		return super.update(review);
	}
	
	@Override
	@Transactional
	public Review get(Object reviewId) {
		return super.find(Review.class, reviewId);
	}

	@Override
	@Transactional
	public void delete(Object reviewId) {
		// TODO Auto-generated method stub
		super.delete(Review.class, reviewId);
	}

	@Override
	@Transactional
	public List<Review> listAll() {
		return super.findWithNamedQuery("Review.findAll");
	}

	@Override
	@Transactional
	public long count() {
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
	
	public List<Review> findByUser(int userId) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("userId", userId);
		List<Review> result = super.findWithNamedQuery("Review.findByUser", parameters);
		
		if (!result.isEmpty()) {
			return result;
		}
		return null;
	}
	
	
	public List<Review> findByRecipe(int recipeId) {
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("recipeId", recipeId);
		List<Review> result = super.findWithNamedQuery("Review.findByRecipe", parameters);

		if (!result.isEmpty()) {
			return result;
		}
		return new ArrayList<Review>();
	}

}
