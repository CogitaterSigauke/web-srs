package com.app.websrs.repositories;

import java.util.List;
import java.util.ArrayList;
import com.app.websrs.models.UserCard;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserCardRepository extends CrudRepository<UserCard, String> {
    
    @Override
    void delete(UserCard deleted);

    UserCard findByCardId(String cardId);
    
    Boolean existsByCardId(String cardId);

    //find all usercards with the given userId
    @Query("{userId: { $eq: '?0' }}")
    ArrayList<UserCard> findAllUserCards(String userId);
            
    }
