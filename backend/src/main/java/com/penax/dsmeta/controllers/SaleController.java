package com.penax.dsmeta.controllers;

import com.penax.dsmeta.entities.Sale;
import com.penax.dsmeta.services.SaleService;
import com.penax.dsmeta.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SaleService service;
    @Autowired
    private SmsService smsService;

    @GetMapping
    public ResponseEntity<Page<Sale>> findSales(@RequestParam(value = "minDate", defaultValue = "") String minDate,
                                                @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
                                                Pageable pageable){

        return ResponseEntity.ok(service.findSales(minDate,maxDate, pageable));

    }

    @GetMapping("/{id}/notification")
    public void notifySms(@PathVariable Long id){
        smsService.sendSms(id);
    }
}
