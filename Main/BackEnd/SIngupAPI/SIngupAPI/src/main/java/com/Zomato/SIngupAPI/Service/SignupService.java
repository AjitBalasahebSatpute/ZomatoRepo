package com.Zomato.SIngupAPI.Service;

import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Zomato.SIngupAPI.Beans.TransactionBean;
import com.Zomato.SIngupAPI.DTO.SignupDTO;
import com.Zomato.SIngupAPI.Repository.SignupRepo;
import com.Zomato.SIngupAPI.Repository.TransactionRepo;
import com.vonage.client.VonageClient;
import com.vonage.client.sms.MessageStatus;
import com.vonage.client.sms.SmsSubmissionResponse;
import com.vonage.client.sms.messages.TextMessage;

@Service
public class SignupService {

	@Autowired
	SignupRepo Singuprepo;
	
	@Autowired
	TransactionRepo transcationRepo;
	
//	@Autowired
//	TransactionBean transactBean;
	
	VonageClient client = VonageClient.builder().apiKey("2836a4ff").apiSecret("MLMP3mhe3CRumvTl").build();
	

	public int registerUser(SignupDTO userdateails ) {
		// get the database check and update in DB and then send SMS 
		//here we are checking if the email has been sent then only the records will be submitted to  DB
		int temp= genrateOTP();
		TransactionBean transcation= new TransactionBean(userdateails.getEmail(),userdateails.getUsername(), temp, new Date());
		System.out.println(transcation.getDate());
		try {
			transcationRepo.save(transcation);
			System.out.println(temp);
			return 1;
		}
		catch (Exception e) {
			e.printStackTrace();
			return  0;
		}

	}
	
	public int genrateOTP() { 	
		 Random random = new Random();
	        // Generate a random number between 1000 and 9999 (inclusive)
	        return random.nextInt(9000) + 1000;
		
	}
	
	
	
	public boolean msgService() {
		TextMessage message = new TextMessage("Vonage APIs",
		        "919822088599",
		        "Hello"
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
	
	
	public List<TransactionBean> getTransactions(){
		
		try {
			return transcationRepo.findAll();
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return null;
		}
	}
	
}



