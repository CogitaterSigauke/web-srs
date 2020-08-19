package com.app.websrs.controllers;

//websrs
import com.app.websrs.models.CardIds;
import com.app.websrs.models.Card;
import com.app.websrs.repositories.CardRepository;

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
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CardController {

	@Autowired
	CardRepository cardRepository;
    
	//add a single Card
	@RequestMapping(method=RequestMethod.POST, value="api/card")
	public Map<String, String> addCard(@RequestBody Card card){

		cardRepository.save(card);
		
		Map<String, String> res = new HashMap<>();
		res.put("id", card.getId());
		res.put("status", "success");
		return res;
	}

	//delete a single card by card ID
	@RequestMapping(method=RequestMethod.DELETE, value="api/card/{id}")
	public Map<String, String> deleteCardByID(@PathVariable String id){

		Map<String, String> res = new HashMap<>();
		if(cardRepository.existsById(id)){

			Card card = cardRepository.findById(id).get();
			cardRepository.delete(card);
			res.put("status", "success");
			return res;	
		}
		res.put("status", "error");
		res.put("error", "card not found");
		return res;
	}

	//edit a single Card
	@RequestMapping(method=RequestMethod.POST, value="api/card/{cardId}")
	public Map<String, String> addCard(@RequestBody Card card, @PathVariable String cardId){
		
		Map<String, String> res = new HashMap<>();
		
		if(cardRepository.existsById(cardId)){

			Card c = cardRepository.findById(cardId).get();
			if(card.getUserId().equals(c.getUserId())){
				card.setId(cardId);
				cardRepository.save(card);
			}
			res.put("status", "success");
			res.put("id", cardId);
			return res;	
			
		}
		res.put("status", "error");
		res.put("error", "card not found");
		return res;
	}

	//get multiple cards by cardIds
	@RequestMapping(method=RequestMethod.POST, value="api/card/cardIds")
	public List<Card> getCardsByCardIds(@RequestBody CardIds cardIds){
		List<Card> cards = new ArrayList<Card>();
		for (String id : cardIds.getCardIds()) {

			if(cardRepository.existsById(id)){
				cards.add(cardRepository.findById(id).get());
			}		
        }
		return cards;
	}

	//delete multiple cards by cardIds
	@RequestMapping(method=RequestMethod.POST, value="api/cards/delete")
	public Map<String, String> deleteCardsByCardIds(@RequestBody ArrayList<String> cardIds){

		Map<String, String> res = new HashMap<>();
		for (String id : cardIds) {

			if(cardRepository.existsById(id)){

				Card card = cardRepository.findById(id).get();
				cardRepository.delete(card);

			}											
        }								
		res.put("status", "success");
		return res;

	}

	@RequestMapping(method=RequestMethod.GET, value="api/card/user/{userId}")
	public List<Card> getCardsByUserId(@PathVariable String userId){
		return cardRepository.findByUserId(userId);
	}



	//fetch all user cards by user ID
	@RequestMapping(method=RequestMethod.GET, value="api/cards")
	public Iterable<Card> getCards(){
		return cardRepository.findAll();
	}

}