package com.unsw.web.mealReco.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	public ResponseEntity<List<Review>> createNewReview(@RequestBody Review review,
					@PathVariable String email, @PathVariable String label){
		System.out.println(label);
		Users user = this.userService.getUsers(email);
		Recipe recipe = this.recipeService.getRecipe(label);
		System.out.println(recipe.getLabel());
		review.setRecipe(recipe);
		review.setUsers(user);
	    this.reviewService.createReview(review);
	    List<Review> results = this.reviewService.listReview();
		return new ResponseEntity<List<Review>>(results, HttpStatus.OK);
	}

}
