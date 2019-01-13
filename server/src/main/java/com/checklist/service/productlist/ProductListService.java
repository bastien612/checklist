package com.checklist.service.productlist;

import com.checklist.domain.ProductList;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface ProductListService {

    public Page<ProductList> findPaginated(int page, int size);

    public ProductList findByTitle(String name);

    public ProductList save(ProductList product);
}
