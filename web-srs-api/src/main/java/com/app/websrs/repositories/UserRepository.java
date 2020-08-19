package com.app.websrs.repositories;

import java.util.List;

import com.app.websrs.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    
    @Override
    void delete(User deleted);

    User findByEmail(String email);
    
    Boolean existsByEmail(String email);
        
    }
