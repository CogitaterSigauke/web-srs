package com.app.websrs.controllers;

//websrs

import com.app.websrs.models.CardRating;
import com.app.websrs.repositories.CardRatingRepository;

//SPRING BOOT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//JAVA

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CardRatingController {

	@Autowired
	CardRatingRepository cardRatingRepository;
    
	//add a single CardRating
	@RequestMapping(method=RequestMethod.POST, value="api/cardRating")
	public CardRating addCardRating(@RequestBody CardRating cardRating){
	
		cardRatingRepository.save(cardRating);
		return cardRating;
	}

    //fetch a single CardRating by CardRating ID
	@RequestMapping(method=RequestMethod.GET, value="api/cardRating/{id}")
	public CardRating getCardRatingByID(@PathVariable String id){
		return cardRatingRepository.findById(id).get();
	}

    //fetch all CardRatings
    @RequestMapping(method=RequestMethod.GET, value="api/cardRating")
	public Iterable<CardRating> getCardRatings(){
		return cardRatingRepository.findAll();
	}

    @RequestMapping(method=RequestMethod.GET, value="api/cardRating/latest")
	public CardRating getLatestCardRating(){
        
		long timeStamp = System.currentTimeMillis();
		return cardRatingRepository.findLatestCardRating(timeStamp);
	}
	
}