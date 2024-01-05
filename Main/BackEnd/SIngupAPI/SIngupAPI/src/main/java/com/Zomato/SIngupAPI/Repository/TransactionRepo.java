package com.Zomato.SIngupAPI.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Zomato.SIngupAPI.Beans.TransactionBean;


@Repository
public interface TransactionRepo extends JpaRepository<TransactionBean, String> {

}
