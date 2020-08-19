package com.app.websrs.models;

import java.util.ArrayList;

public class ID {
    
    String id;
	String topic;
    String userId;
    ArrayList<String> cardIds;

		public ID( String id, String topic, String userId, ArrayList<String> cardIds){
            this.id = id;
			this.topic = topic;
			this.cardIds = cardIds;
			this.userId = userId;
		}

		public String getId(){
			return id;
		}

		public void setId(String id){
            this.id = id;
		}

}