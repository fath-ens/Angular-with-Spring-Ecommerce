package com.fathens.springbootecommerce.service;

import com.fathens.springbootecommerce.dto.Purchase;
import com.fathens.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
