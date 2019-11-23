package com.unsw.web.mealReco.controller;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Review;
import com.unsw.web.mealReco.entity.Users;

@CrossOrigin(origins = "http://localhost:4200")
@Transactional
@RestController
@EnableAutoConfiguration
@RequestMapping("/review")
public class ReviewController extends BaseController {

	@PostMapping(path="/create/{email}/{label}")
	@ResponseBody
	public ResponseEntity<?> createNewReview(@RequestBody Review review,
					@PathVariable String email, @PathVariable String label){
		System.out.println(label);
		email = email.trim();
		Users user = this.userService.getUsers(email);
		Recipe recipe = this.recipeService.getRecipe(label);
		if (recipe == null) {
			return new ResponseEntity<String>("Please save your recipe and then comment", HttpStatus.OK);
		}
		review.setRecipe(recipe);
		review.setUsers(user);
	    this.reviewService.createReview(review);
	    float averageNum = this.reviewService.calculateAvgRatingRecipe(recipe);
	    this.recipeService.updateRating(averageNum, recipe);
	    List<Review> results = this.reviewService.listRecipeReview(recipe);
		return new ResponseEntity<List<Review>>(results, HttpStatus.OK);
	}
	@GetMapping(path="/get/{label}")
	@ResponseBody
	public ResponseEntity<?> getReviewList(@PathVariable String label){
		Recipe recipe = this.recipeService.getRecipe(label);
		if (recipe == null) {
			return new ResponseEntity<List<Review>>(new ArrayList<Review>(), HttpStatus.OK);
		}
		List<Review> results = this.reviewService.listRecipeReview(recipe);
		System.out.println(results.size());
		if (results.size() == 0) {
			return new ResponseEntity<List<Review>>(new ArrayList<Review>(), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Review>>(results, HttpStatus.OK);
		}
	}
	
	@GetMapping(path="/getE/{email}")
	@ResponseBody
	public ResponseEntity<?> getReviewListByUser(@PathVariable String email){
		email = email.trim();
		Users user = this.userService.getUsers(email);
		if (user == null) {
			return new ResponseEntity<List<Review>>(new ArrayList<Review>(), HttpStatus.OK);
		}
		List<Review> results = this.reviewService.listRecipeReviewByUser(user);
		if (results == null || results.size() == 0) {
			return new ResponseEntity<List<Review>>(new ArrayList<Review>(), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Review>>(results, HttpStatus.OK);
		}
	}
	
	@DeleteMapping(path="/delete/{id}/{label}")
	@ResponseBody
	public ResponseEntity<?> deleteReview(@PathVariable String id, @PathVariable String label){
		this.reviewService.deleteReview(Integer.parseInt(id));
		Recipe recipe = this.recipeService.getRecipe(label);
		if (recipe == null) {
			return new ResponseEntity<List<Review>>(new ArrayList<Review>(), HttpStatus.OK);
		}
		List<Review> results = this.reviewService.listRecipeReview(recipe);
		return new ResponseEntity<List<Review>>(results, HttpStatus.OK);
	}
}
