package com.app.websrs.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cardRatings")
public class CardRating {

    @Id
    String id;
    String userCardId;
    int rating; 
    long timeStamp;
    
    public CardRating(String userCardId, int rating){

        this.userCardId = userCardId;
        this.rating = rating;
        this.timeStamp = System.currentTimeMillis();
     
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getTimeStamp() {
        return this.timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getUserCardId() {
        return this.userCardId;
    }

    public void setUserCardId(String userCardId) {
        this.userCardId = userCardId;
    }

}
