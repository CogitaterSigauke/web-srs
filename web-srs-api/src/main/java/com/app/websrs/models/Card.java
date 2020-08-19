package com.app.websrs.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cards")
public class Card {

    @Id
    String id;
    String userId;
    String front;
    String back;
    long timeStamp;

    public Card(String front, String back, String userId){

        this.front = front;
        this.back = back;
        this.userId = userId;
        this.timeStamp = System.currentTimeMillis();
     
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    public long getTimeStamp() {
        return this.timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getBack() {
        return back;
    }

    public void setBack(String back) {
        this.back = back;
    }

    public String getFront() {
        return this.front;
    }

    public void setFront(String front) {
        this.front = front;
    }

}
