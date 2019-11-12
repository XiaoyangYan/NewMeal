package com.unsw.web.mealReco.controller.service;


import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.unsw.web.mealReco.dao.ReviewDAO;
import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.Users;

@Transactional
@Service
public class ReviewServices {
	private ReviewDAO reviewDAO;
	
	public ReviewServices(EntityManager entityManager) {
		reviewDAO = new ReviewDAO(entityManager);
	}
	
	public void createReview(Review review) {
		reviewDAO.create(review);
	}
	
	public List<Review> listReview(){
		return this.reviewDAO.listAll();
	}
	
	public List<Review> listRecipeReview(Recipe recipe){
		System.out.println(recipe.getRecipeId());
		List<Review> results = this.reviewDAO.findByRecipe(recipe.getRecipeId());
		return results;
	}
	
	public void updateReview(Review review) {
		reviewDAO.update(review);
	}
	public void deleteReview(int id) {
		reviewDAO.delete(id);
	}
	public List<Review> listRecipeReviewByUser(Users user){
		return this.reviewDAO.findByUser(user.getUserId());
	}
	
	public float calculateAvgRatingRecipe(Recipe recipe) {
		List<Review> results = this.reviewDAO.findByRecipe(recipe.getRecipeId());
		float average = 0;
		int sum = 0;
		for(int i = 0; i < results.size(); i++) {
			sum += results.get(i).getRating();
		}
		if (results != null && results.size() != 0) {
			average = sum/results.size();
		}
		return average;
	}
}
