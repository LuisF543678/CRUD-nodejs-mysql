// Crear la base de datos
create database crudnode;

// Usar la base de datos
use crudnode;

// Creando la tabla para datos
create table customer (
    id int(6) unsigned auto_increment primary key,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15) not null
);

// Mostrar las tablas
show tables;

// Describir tabla
describe customer;

