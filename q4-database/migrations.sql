-- Given following class diagram, prepare relational database structure description:


-- Relational database initial migration or dump.

CREATE TABLE IF NOT EXISTS vehicle (
    model VARCHAR(255) NOT NULL,
    plate_number VARCHAR(255) NOT NULL,
    id VARCHAR(255) NOT NULL PRIMARY,
);

CREATE TABLE IF NOT EXISTS drive (
    drive_date Date,
    distance INTEGER,
    id VARCHAR(255) NOT NULL PRIMARY,
    vehicle_id VARCHAR(255) NOT NULL,
);

ALTER TABLE
    drive
ADD
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(id);

CREATE TABLE IF NOT EXISTS addresses (
    street VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    id VARCHAR(255) NOT NULL PRIMARY,
);

CREATE TABLE IF NOT EXISTS student (
    id VARCHAR(255) NOT NULL PRIMARY,
    student_number VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS professor (
    id VARCHAR(255) NOT NULL PRIMARY,
    salary INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS person (
    name VARCHAR(255) NOT NULL,
    id VARCHAR(255) NOT NULL PRIMARY,
    position ENUM ('professor', 'student') NOT NULL,
    vehicle_id VARCHAR(255),
    address_id VARCHAR(255) NOT NULL,
    student_id VARCHAR(255),
    professor_id VARCHAR(255),
);

ALTER TABLE
    person
ADD
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(id);

ALTER TABLE
    person
ADD
    FOREIGN KEY (address_id) REFERENCES addresses(id);

ALTER TABLE
    person
ADD
    FOREIGN KEY (student_id) REFERENCES student(id);

ALTER TABLE
    person
ADD
    FOREIGN KEY (professor_id) REFERENCES professor(id);