package com.app.websrs.models;

import com.app.websrs.models.CardRating;
import com.app.websrs.models.Card;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.format.DateTimeFormatter;
import java.time.ZoneOffset;
import java.time.LocalDateTime;

@Document(collection = "userCards")
public class UserCard {
    
    @Id
    String id;
    String userId;
    String cardId;
    String nextReview;
    String lastReview;
    float interval;
    float ease;
    int totalRepetitions;
    
    public UserCard(String nextReview, float interval, float ease, String userId, String cardId){

        this.userId = userId;
        this.cardId = cardId;
        this.interval = interval;
        this.ease = ease;
        this.totalRepetitions = 0;
        DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime now = LocalDateTime.now(ZoneOffset.UTC);
        this.lastReview = dtf.format(now);
        this.nextReview = nextReview;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCardId() {
        return cardId;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLastReview() {
        return lastReview;
    }

    public void setLastReview(String lastReview) {
        this.lastReview = lastReview;
    }

    public String getNextReview() {
        return nextReview;
    }

    public void setNextReview(String nextReview) {
        this.nextReview = nextReview;
    }

    public float getInterval() {
        return interval;
    }

    public void setInterval(float interval) {
        this.interval = interval;
    }

    public float getEase() {
        return ease;
    }

    public void setEase(float ease) {
        this.ease = ease;
    }

    public int getTotalRepetitions() {
        return totalRepetitions;
    }

    public void setTotalRepetitions(int totalRepetitions) {
        this.totalRepetitions = totalRepetitions;
    }
}
