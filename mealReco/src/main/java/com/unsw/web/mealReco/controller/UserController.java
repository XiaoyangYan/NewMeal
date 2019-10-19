package com.unsw.web.mealReco.controller;

import javax.transaction.Transactional;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
//			@RequestParam(value="username")
//	String myUsername,@RequestParam(value="password") String myPassword,
//			@RequestParam(value="email") String myEmail
		System.out.println("fullname: "+user.getFullName());
		System.out.println("email: "+user.getEmail());
		System.out.println("password: "+user.getPassword());
		Users newUser = this.userService.registerUser(user.getFullName(), user.getPassword(), user.getEmail());
//		URI uri = ServletUriComponentsBuilder.fromCurrentContextPath()
//					.path("/{id}").buildAndExpand(newUser.getUserId()).toUri();
		return new ResponseEntity<Users>(newUser, HttpStatus.OK);
	}

}