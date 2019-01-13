package com.checklist.service.product;

import com.checklist.domain.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {

    public Product findByName(String name);

    public Product save(Product product);

}
