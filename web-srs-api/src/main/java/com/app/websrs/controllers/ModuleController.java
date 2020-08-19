package com.app.websrs.controllers;

//websrs
import com.app.websrs.models.ID;
import com.app.websrs.models.Module;
import com.app.websrs.repositories.ModuleRepository;

//SPRING BOOT

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

//JAVA

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ModuleController {

	@Autowired
	ModuleRepository moduleRepository;
    
	//add a single Module
	@RequestMapping(method=RequestMethod.POST, value="api/module")
	public Map<String, String>  addModule(@RequestBody Module module){
		long count = moduleRepository.count();
		module.setId(count + 1 + "");
		moduleRepository.save(module);
		Map<String, String> res = new HashMap<>();
		res.put("status", "success");
		res.put("id", module.getId());
		return res;
	}

    //fetch a single modules by module ID
	@RequestMapping(method=RequestMethod.GET, value="api/module/{id}")
	public Module getModuleByID(@PathVariable String id){
		return moduleRepository.findById(id).get();
	}

	//delete modules
	@RequestMapping(method=RequestMethod.POST, value="api/modules/delete")
	public Map<String, String> deleteMultipleModules(@RequestBody ArrayList<ID> modules){

		Map<String, String> res = new HashMap<>();

		for(int i=0; i<modules.size(); i++){

			String id = modules.get(i).getId();
			
			if(moduleRepository.existsById(id)){

				Module module = moduleRepository.findById(id).get();
				moduleRepository.delete(module);
				System.out.print("MODULE DELETED");

			}else{
				System.out.print("MODULE DOES NOT EXISTS ");
			}
		}
		res.put("status", "success");

		return res;
	}

	//delete a single modules by module ID
	@RequestMapping(method=RequestMethod.DELETE, value="api/module/{id}")
	public Map<String, String> deleteModuleByID(@PathVariable String id){

			if(moduleRepository.existsById(id)){

				Module module = moduleRepository.findById(id).get();
				moduleRepository.delete(module);
				System.out.print("MODULE DELETED ");
				
			}else{
				System.out.print("MODULE DOES NOT EXISTS ");
			}
		Map<String, String> res = new HashMap<>();
		res.put("status", "success");
		return res;
	}

    //fetch all modules
    @RequestMapping(method=RequestMethod.GET, value="api/module")
    public Iterable<Module> module() {
        return moduleRepository.findAll();
    }
	
	@RequestMapping(method=RequestMethod.GET, value="api/module/topic/{topic}")
	public List<Module> getModulesByTopic(@PathVariable String topic){
		return moduleRepository.findByTopic(topic);
	}
	@RequestMapping(method=RequestMethod.GET, value="api/module/user/{userId}")
	public List<Module> getModulesByUserId(@PathVariable String userId){
		return moduleRepository.findByUserId(userId);
	}


    //add a single card to an existing module
    @RequestMapping(method=RequestMethod.GET, value="api/{moduleId}/module/{cardId}")
	public Map<String, String> addCardId(@PathVariable String moduleId, @PathVariable String cardId){
        Map<String, String> res = new HashMap<>();
        if(moduleRepository.existsById(moduleId)){
            Module module = moduleRepository.findById(moduleId).get();
            module.addCardId(cardId);
            moduleRepository.save(module);
            res.put("status", "success");
        }else{

            res.put("status", "error");
            res.put("error", "module not found");

        }
		return res;
	}
	
    //remove a single card to an existing module
    @RequestMapping(method=RequestMethod.GET, value="api/{moduleId}/module/remove/{cardId}")
	public Map<String, String> removeCardId(@PathVariable String moduleId, @PathVariable String cardId){
        Map<String, String> res = new HashMap<>();
        if(moduleRepository.existsById(moduleId)){
            Module module = moduleRepository.findById(moduleId).get();
			ArrayList<String> cardIds = module.getCardIds();
			if(cardIds.contains(cardId)){
				cardIds.remove(cardId);
				module.setCardIds(cardIds);
            	moduleRepository.save(module);
				res.put("status", "success");
			}else{
				res.put("status", "failed");
				res.put("error", "cardId not found");
			}

        }else{

            res.put("status", "error");
            res.put("error", "module not found");

        }
		return res;
	}
	

}
