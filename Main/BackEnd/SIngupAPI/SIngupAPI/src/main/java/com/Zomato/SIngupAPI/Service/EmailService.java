package com.Zomato.SIngupAPI.Service;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class EmailService {
	String apiKey ;
	 String baseUrl;
	        public EmailService() {
		super();
		apiKey = "10803697B6C07D430D83EDA60321C64EDEF78212B7608BC784DC6D9439E9FE5E41114254E7DC9522AE8786EA3210D747";
		baseUrl= "https://api.elasticemail.com/v2/";}
	        
	       
	public boolean sendEmail() {
		// Example: Sending a simple email
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(baseUrl + "email/send"))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Auth", "Bearer" + "98587044E0EA2CBC55BF8C3987D7C306F3248771268B58C52D8CC0F3D3A10B6624C76638C6FDB184DE6AC2CCE71CCDA6")
                    .POST(HttpRequest.BodyPublishers.ofString("from=ajit.git174@gmail.com&to=ajit.git174@gmail.com&subject=Test&body=Hello, this is a test email"))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
	return true;
	}
	
	        
	        
	        
	        
	        
	        
	        
//
//	        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
//	            HttpPost request = new HttpPost(baseUrl);
//	            request.setHeader("Content-Type", "application/x-www-form-urlencoded");
//	            request.setHeader("Authorization", "Bearer"+apiKey);
//
//	            String body = "from=ajit.git174@gmail.com&to=ajit.git174@gmail.com&subject=Test&body=Hello, this is a test email";
//	            request.setEntity(new StringEntity(body));
//
//	            try (CloseableHttpResponse response = httpClient.execute(request)) {
//	                HttpEntity entity = response.getEntity();
//	                if (entity != null) {
//	                    try (BufferedReader br = new BufferedReader(new InputStreamReader(entity.getContent()))) {
//	                        String line;
//	                        while ((line = br.readLine()) != null) {
//	                            System.out.println(line);
//	                        }
//	                    }
//	                }
//	            }
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	        }
//	        
//	        return true;
//	    }
	
}

