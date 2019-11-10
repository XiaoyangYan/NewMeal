package com.unsw.web.mealReco.controller;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.unsw.web.mealReco.entity.Users;

@CrossOrigin(origins = "http://localhost:4200")
@Transactional
@RestController
@EnableAutoConfiguration
public class UserController extends BaseController {
	
	
	@RequestMapping(method=RequestMethod.GET, path="/main")
	public String mainPage() {
		return "main";
	}
	
	@PostMapping(path="/register")
	@ResponseBody
	public ResponseEntity<Users>  registerUser(@RequestBody Users user){
		user.setEmail(user.getEmail().trim());
		user.setFullName(user.getFullName().trim());
		user.setPassword(user.getPassword().trim());
		Users newUser = this.userService.registerUser(user.getFullName(), user.getPassword(), user.getEmail());
		return new ResponseEntity<Users>(newUser, HttpStatus.OK);
	}
	
	@GetMapping(path="/login/{email}/{password}")
	@ResponseBody
	public ResponseEntity<?> loginUser(@PathVariable String email, 
			@PathVariable String password ) {
		email = email.trim();
		password = password.trim();
		System.out.println(email);
		String userMessage = this.userService.loginUser(email, password);
		return ResponseEntity.ok(userMessage);
	}
	@GetMapping(path="/username/{email}")
	@ResponseBody
	public ResponseEntity<?> getUserName(@PathVariable String email){
		email = email.trim();
		String userName = this.userService.getUserName(email);
		if (userName != null) {
			return ResponseEntity.ok(userName);
		} else {
			return ResponseEntity.ok("NULL");
		}
	}
}