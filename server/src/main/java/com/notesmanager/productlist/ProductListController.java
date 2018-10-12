package com.notesmanager.productlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;

@RestController
public class ProductListController {

    @Autowired
    private ProductListRepository productListRepository;

    @GetMapping("/lists")
    public Page<ProductListModel> getProductListModelPage(Pageable pageable) {
        return productListRepository.findAll();
    }

}
