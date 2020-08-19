package com.app.websrs.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.format.DateTimeFormatter;
import java.time.ZoneOffset;
import java.time.LocalDateTime;

@Document(collection = "users")
public class User {
    
    @Id
    String id;
    String name;
    String familyName;
    String email;
    String profileUrl;
    String createdAt;

    public User(String name, String familyName, String email, String profileUrl){

        this.name = name;
        this.familyName = familyName;
        this.email = email;
        this.profileUrl = profileUrl;
        DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime now = LocalDateTime.now(ZoneOffset.UTC);
        this.createdAt = dtf.format(now);

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getprofileUrl() {
        return profileUrl;
    }

    public void setprofileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public String getCreatedAt() {
        return createdAt;
    }

}
