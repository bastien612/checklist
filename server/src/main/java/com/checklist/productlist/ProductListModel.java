package com.checklist.productlist;

import com.checklist.model.AuditModel;
import com.checklist.product.Product;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product_list")
public class ProductListModel extends AuditModel {

    @Id
    @GeneratedValue(generator = "product_list_generator")
    @SequenceGenerator(
            name = "product_list_generator",
            sequenceName = "product_list_sequence",
            initialValue = 1
    )
    private Long id;

    @Column(columnDefinition = "text")
    private String title;

    @ManyToMany(fetch=FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Product> products;
}
