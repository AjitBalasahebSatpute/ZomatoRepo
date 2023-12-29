package com.Zomato.SIngupAPI.Service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Zomato.SIngupAPI.DTO.SignupDTO;
import com.Zomato.SIngupAPI.Repository.SignupRepo;
import com.vonage.client.VonageClient;
import com.vonage.client.sms.MessageStatus;
import com.vonage.client.sms.SmsSubmissionResponse;
import com.vonage.client.sms.messages.TextMessage;

@Service
public class SignupService {

	@Autowired
	SignupRepo repo;
	
	
	VonageClient client = VonageClient.builder().apiKey("2836a4ff").apiSecret("MLMP3mhe3CRumvTl").build();
	

	public int registerUser(SignupDTO userdateails ) {
		// get the database check and update in DB and then send SMS 
		//here we are checking if the email has been sent then only the records will be submitted to  DB
		return 0;
	}
	
	public int genrateOTP() { 	
		 Random random = new Random();
	        // Generate a random number between 1000 and 9999 (inclusive)
	        return random.nextInt(9000) + 1000;
		
	}
	
	
	
	public boolean msgService() {
		TextMessage message = new TextMessage("Vonage APIs",
		        "919370564591",
		        "Hello Dhamu, kasa ahes, API Test kartuy, so first sms tula send kela"
		);

		SmsSubmissionResponse response = client.getSmsClient().submitMessage(message);

		if (response.getMessages().get(0).getStatus() == MessageStatus.OK) {
		    System.out.println("Message sent successfully.");
		    return true;
		} else {
		    System.out.println("Message failed with error: " + response.getMessages().get(0).getErrorText());
		    return false;
		}
	}
	
	}



