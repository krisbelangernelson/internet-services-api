CREATE TABLE service_category (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE
);

CREATE TABLE connection_type (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE 
);

CREATE TABLE service_user (
  id serial PRIMARY KEY,
  first_name varchar(20),
  last_name varchar(40),
  email varchar(40) UNIQUE,
  phone varchar(15) UNIQUE,
  credit_card_company varchar(20),
  credit_card_number varchar(20),
  create_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE internet_service (
  id smallserial PRIMARY KEY,
  name varchar(40) UNIQUE,
  label varchar(40),
  description varchar(80),
  service_category_id smallserial REFERENCES service_category (id),
  connection_type_id smallserial REFERENCES connection_type (id),
  bandwidth_down smallint,
  bandwidth_up smallint,
  price smallserial,
  ideal_num_users varchar(10),
  ideal_num_devices varchar(10)
);

CREATE TABLE internet_order (
  id serial PRIMARY KEY,
  service_id smallserial REFERENCES internet_service (id),
  user_id serial REFERENCES service_user (id),
  order_date TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

