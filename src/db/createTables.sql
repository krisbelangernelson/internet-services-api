CREATE TABLE service_category (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE
);

CREATE TABLE connection_type (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE 
);

CREATE TABLE internet_customer (
  id serial PRIMARY KEY,
  first_name varchar(20) NOT NULL,
  last_name varchar(40) NOT NULL,
  email varchar(40) NOT NULL UNIQUE,
  phone varchar(10) NOT NULL UNIQUE,
  password text NOT NULL,
  create_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE internet_service (
  id smallserial PRIMARY KEY,
  name varchar(40) UNIQUE,
  label varchar(40),
  description varchar(80),
  service_category_id smallint REFERENCES service_category (id),
  connection_type_id smallint REFERENCES connection_type (id),
  bandwidth_down smallint,
  bandwidth_up smallint,
  price smallserial,
  ideal_num_users varchar(10),
  ideal_num_devices varchar(10)
);

CREATE TABLE internet_order (
  id serial PRIMARY KEY,
  service_id smallint REFERENCES internet_service (id),
  customer_id smallint REFERENCES internet_customer (id),
  service_street varchar(30),
  service_city varchar(30),
  service_province varchar(20),
  service_postal_code varchar(6),
  state smallint DEFAULT 1 REFERENCES order_state (id),
  order_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_state (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE 
);

