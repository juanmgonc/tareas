DROP DATABASE IF EXISTS acamica;

CREATE DATABASE acamica;

USE acamica;

CREATE TABLE tareas (
    id INT NOT NULL PRIMARY KEY auto_increment,
    descripcion VARCHAR(100),
	prioridad VARCHAR(10)
);

INSERT INTO tareas (id, descripcion, prioridad) 
VALUES (1, 'Hacer las compras', 'MEDIA');

INSERT INTO tareas (id, descripcion, prioridad) 
VALUES (2, 'Estudiar para el examen final de Acamica', 'ALTA');

INSERT INTO tareas (id, descripcion, prioridad) 
VALUES (3, 'Ir a tomar unas birras con la comision 4', 'ALTA');