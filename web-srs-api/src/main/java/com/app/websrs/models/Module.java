package com.app.websrs.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "modules")
public class Module {

    String id;
    String topic;
    String userId;
    ArrayList<String> cardIds;
    
    public Module(String topic, String userId, ArrayList<String> cardIds){

        this.topic = topic;
        this.cardIds = cardIds;
        this.userId = userId;
     
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public ArrayList<String> getCardIds() {
        return this.cardIds;
    }

    public void addCardId(String cardId) {
        this.cardIds.add(cardId);
    }

    public void setCardIds(ArrayList<String> cardIds) {
        this.cardIds = cardIds;
    }

}
