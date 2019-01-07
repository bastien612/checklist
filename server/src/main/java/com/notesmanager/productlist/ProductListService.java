package com.notesmanager.productlist;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProductListService {

    public Page<ProductListModel> findPaginated(int page, int size);
}
