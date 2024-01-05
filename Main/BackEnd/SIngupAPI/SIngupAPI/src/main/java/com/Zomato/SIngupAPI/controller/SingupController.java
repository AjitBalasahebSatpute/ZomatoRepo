package com.Zomato.SIngupAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Zomato.SIngupAPI.DTO.Response;
import com.Zomato.SIngupAPI.DTO.SignupDTO;
import com.Zomato.SIngupAPI.Service.EmailService;
import com.Zomato.SIngupAPI.Service.SignupService;

@RestController
@CrossOrigin
public class SingupController {
		
	@Autowired
	SignupService service ;
	@Autowired
	EmailService EmailService;
	


	
	@PostMapping("/check")
	public ResponseEntity<?> check(){
//		System.out.println(service.genrateOTP());;
//		System.out.println(service.msgService());
		System.out.println(EmailService.sendEmail());
		return new ResponseEntity<>("Say working", HttpStatus.OK);
	}
	
	@GetMapping("/get/transactions")
	public ResponseEntity<?> getTransactions(){
	
		return new ResponseEntity<>(service.getTransactions(),HttpStatus.OK);
	}
	
	
	@PostMapping("/user/singup")
	public ResponseEntity<?> registerUser(@RequestBody SignupDTO userData ){
		Response res= new Response();
		if(service.registerUser(userData)==1) {
			res.setMsg("we got it!!!");
			res.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<>(res,HttpStatus.OK);
		}
		else {
			res.setMsg("We got an error!");
			res.setStatusCode(HttpStatus.FAILED_DEPENDENCY.value());
			return new ResponseEntity<>(res,HttpStatus.FAILED_DEPENDENCY);
		}
		
			}
}
