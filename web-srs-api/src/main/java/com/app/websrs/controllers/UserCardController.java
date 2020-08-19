package com.app.websrs.controllers;

//websrs

import com.app.websrs.models.UserCard;
import com.app.websrs.repositories.UserCardRepository;

//SPRING BOOT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//JAVA

import java.util.ArrayList;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserCardController {

	@Autowired
	UserCardRepository userCardRepository;
    
	//add a single usercard
	@RequestMapping(method=RequestMethod.POST, value="api/add/usercard")
	public UserCard addUserCard(@RequestBody UserCard userCard){

		if(userCardRepository.existsByCardId(userCard.getCardId())){

			// update userCard if it already exists otherwise create a new one	
			UserCard uCard = userCardRepository.findByCardId(userCard.getCardId());
			uCard.setUserId(userCard.getUserId());
			uCard.setNextReview(userCard.getNextReview());
			uCard.setLastReview(userCard.getLastReview());
			uCard.setInterval(userCard.getInterval());
			uCard.setEase(userCard.getEase());
			uCard.setTotalRepetitions(userCard.getTotalRepetitions());
			userCardRepository.save(uCard);
			return uCard;
		}
		userCardRepository.save(userCard);
		return userCard;
	}


	//fetch all user cards by user ID
	@RequestMapping(method=RequestMethod.GET, value="api/usercards/{userId}")
	public ArrayList<UserCard> getUserCards(@PathVariable String userId){
		return userCardRepository.findAllUserCards(userId);
	}
	
}