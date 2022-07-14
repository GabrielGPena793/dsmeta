package com.penax.dsmeta.services;

import com.penax.dsmeta.entities.Sale;
import com.penax.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public List<Sale> findSales(){
        return  repository.findAll();
    }

}
