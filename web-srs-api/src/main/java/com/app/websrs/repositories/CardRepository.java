package com.app.websrs.repositories;

import java.util.List;

import com.app.websrs.models.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.mongodb.repository.Query;


public interface CardRepository extends CrudRepository<Card, String> {
    
    @Override
    void delete(Card deleted);

    @Query("{userId: { $eq: '?0' }}")
    List<Card> findByUserId(String userId);

    }
