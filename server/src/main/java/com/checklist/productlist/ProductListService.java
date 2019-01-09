package com.checklist.productlist;

import org.springframework.data.domain.Page;


public interface ProductListService {

    public Page<ProductListModel> findPaginated(int page, int size);

}
