package com.unsw.web.mealReco.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.unsw.web.mealReco.entity.Recipe;
import com.unsw.web.mealReco.entity.Users;

@CrossOrigin(origins = "http://localhost:4200")
@Transactional
@RestController
@EnableAutoConfiguration
@RequestMapping("/recipe")
public class RecipeController extends BaseController{

	@PostMapping(path="/create/{email}")
	@ResponseBody
	public ResponseEntity<?> createSavedNewRecipe(@RequestBody Recipe recipe, @PathVariable String email){
		System.out.println(recipe.getLabel()+" "+recipe.getPublishDate());
		Users user = this.userService.getUsers(email);
		Integer recipeId = this.recipeService.createSavedRecipe(recipe, user);
		return new ResponseEntity<String>(recipeId.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/getF/{email}")
	@ResponseBody
	public ResponseEntity<List<Recipe>> getSavedRecipeList(@PathVariable String email){
		System.out.println(email);
		email = email.trim();
		Users user = this.userService.getUsers(email);
		List<Recipe> savedRecipe = this.recipeService.getSavedRecipeList(user);
		for(Recipe item: savedRecipe) {
			float num = this.reviewService.calculateAvgRatingRecipe(item);
			this.recipeService.updateRating(num, item);
		}
		return new ResponseEntity<List<Recipe>>(savedRecipe, HttpStatus.OK);
	}
	
	@GetMapping(path="/getS/{label}")
	@ResponseBody
	public ResponseEntity<Recipe> getSpecialRecipe(@PathVariable String label){
		Recipe recipe = this.recipeService.getRecipe(label);
		return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
	}
}
