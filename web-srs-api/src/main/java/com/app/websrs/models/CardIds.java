package com.app.websrs.models;

//JAVA

import java.util.List;
import java.util.ArrayList;

public class CardIds {

		List<String> cardIds = new ArrayList<String>();

		public CardIds(){

		}

		public CardIds(List<String> cardIds){
			this.cardIds = cardIds;
		}

		public List<String> getCardIds(){
			return cardIds;
		}

}