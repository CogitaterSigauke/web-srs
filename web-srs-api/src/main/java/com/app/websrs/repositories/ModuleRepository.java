package com.app.websrs.repositories;

import java.util.List;

import com.app.websrs.models.Module;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ModuleRepository extends CrudRepository<Module, String> {
    
    @Override
    void delete(Module deleted);
    
    //find all cards with the given topic or userId
    @Query("{topic: { $eq: '?0' }}")
    List<Module> findByTopic(String topic);

    @Query("{userId: { $eq: '?0' }}")
    List<Module> findByUserId(String userId);

    // @Query("")
    // List<Module> findAll();
    }
