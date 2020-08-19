package com.app.websrs.controllers;

//websrs

import com.app.websrs.models.User;
import com.app.websrs.repositories.UserRepository;

//SPRING BOOT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//JAVA

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;

	//users sign-up route
	@RequestMapping(method=RequestMethod.POST, value="api/signup")
	public User signup(@RequestBody User user){

		if(userRepository.existsByEmail(user.getEmail())){
			User userD = userRepository.findByEmail(user.getEmail());
			return userD;
		}

		userRepository.save(user);
		return user;
	}
	
	//finding users by their unique id
	@RequestMapping(method=RequestMethod.GET, value="api/user/{id}")
	public User getUser(@PathVariable String id){
		return userRepository.findById(id).get();
	}
	

	//finding users by their unique id
	@RequestMapping(method=RequestMethod.GET, value="api/users")
	public Iterable<User> getAllUsers(){
		return userRepository.findAll();
	}
	
}
