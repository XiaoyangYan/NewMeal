package com.unsw.web.mealReco.controller.service;


import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.dao.ReviewDAO;
import com.unsw.web.mealReco.entity.Review;

@Transactional
@Service
public class ReviewServices {
	private ReviewDAO reviewDAO;
	
	public ReviewServices(EntityManager entityManager) {
		reviewDAO = new ReviewDAO(entityManager);

	}
	
	public void createReview(Review review) {
		System.out.println(review.getComment());
		reviewDAO.create(review);
	}
	
	public List<Review> listReview(){
		return this.reviewDAO.listAll();
	}
}
