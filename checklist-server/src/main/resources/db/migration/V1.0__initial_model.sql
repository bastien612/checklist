create table category (
    id UUID PRIMARY KEY,
    name TEXT,
    created_at TIMESTAMP with time zone,
    updated_at TIMESTAMP with time zone
);

create table product (
    id UUID PRIMARY KEY,
    name text,
    created_at TIMESTAMP with time zone,
    updated_at TIMESTAMP with time zone
);

create table rel_category_product (
    product_id UUID references product(id),
    category_id UUID references category(id)
);

--create table rel_product_list (
--    id BIGINT PRIMARY KEY,
--    title text,
--    created_at DATE,
--    updated_at DATE
--);
--
--create table rel_product_list(
--    product_id BIGINT REFERENCES product(id),
--    product_list_id BIGINT REFERENCES product_list(id)
--);