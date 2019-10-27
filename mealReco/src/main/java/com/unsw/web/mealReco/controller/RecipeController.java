package com.unsw.web.mealReco.controller;

import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<?> createNewRecipe(@RequestBody Recipe recipe, @PathVariable String email){
		System.out.println(recipe.getLabel()+" "+recipe.getPublishDate());
		Users user = this.userService.getUsers(email);
		Integer recipeId = this.recipeService.createRecipe(recipe, user);
		return new ResponseEntity<String>(recipeId.toString(), HttpStatus.OK);
	}

}
