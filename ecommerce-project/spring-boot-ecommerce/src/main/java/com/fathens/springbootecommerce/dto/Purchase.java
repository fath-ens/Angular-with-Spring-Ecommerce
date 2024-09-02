package com.fathens.springbootecommerce.dto;

import com.fathens.springbootecommerce.entity.Address;
import com.fathens.springbootecommerce.entity.Customer;
import com.fathens.springbootecommerce.entity.Order;
import com.fathens.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
