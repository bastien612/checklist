package com.checklist.productlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProductListServiceImpl {

    @Autowired
    private ProductListRepository dao;

    public Page<ProductListModel> findPaginated(int page, int size) {

        return dao.findAll(PageRequest.of(page, size));
    }


}
