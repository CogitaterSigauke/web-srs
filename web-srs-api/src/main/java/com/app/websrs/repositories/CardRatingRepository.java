package com.app.websrs.repositories;

import java.util.List;
import java.util.ArrayList;
import com.app.websrs.models.CardRating;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CardRatingRepository extends CrudRepository<CardRating, String> {
    
    @Override
    void delete(CardRating deleted);

    CardRating findByUserCardId(String userCardId);
    
    Boolean existsByUserCardId(String userCardId);

    @Query("{ $max: { $or: [ {timeStamp: {$eq: '?0' }}, {timeStamp: {$lt: '?0'}} ] } }")
    CardRating findLatestCardRating(long timeStamp);
            
    }
