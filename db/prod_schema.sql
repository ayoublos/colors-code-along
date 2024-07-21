DROP DATABASE IF EXISTS colors_prod;
CREATE DATABASE colors_crud;

\c colors_crud;

CREATE TABLE colors (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 is_favorite BOOLEAN
);