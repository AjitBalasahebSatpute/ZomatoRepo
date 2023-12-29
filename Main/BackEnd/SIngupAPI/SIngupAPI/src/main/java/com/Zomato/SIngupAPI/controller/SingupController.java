package com.Zomato.SIngupAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.Zomato.SIngupAPI.DTO.Response;
import com.Zomato.SIngupAPI.DTO.SignupDTO;
import com.Zomato.SIngupAPI.Service.SignupService;

@Controller
@CrossOrigin
public class SingupController {
		
	@Autowired
	SignupService service ;
	
	@GetMapping("/check")
	public ResponseEntity<?> check(){
		System.out.println(service.genrateOTP());;
		System.out.println(service.msgService());
		return new ResponseEntity<>("Say working", HttpStatus.OK);
	}
	
	@PostMapping("/user/singup")
	public ResponseEntity<?> registerUser(@RequestBody SignupDTO userData ){
		Response res= new Response();
		res.setMsg("we got it!!!");
		res.setStatusCode(HttpStatus.OK.value());
		System.out.println(userData.getUsername());
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
}
