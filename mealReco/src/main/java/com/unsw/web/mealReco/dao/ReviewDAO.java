package com.unsw.web.mealReco.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.Users;

public class ReviewDAO extends JpaDAO<Review> implements GenericDAO<Review>{

	public ReviewDAO(EntityManager entityManager) {
		super(entityManager);
	}

	@Override
	@Transactional
	public Review create(Review review) {
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
	

}
