DROP DATABASE IF EXISTS `election_candidates`;
CREATE DATABASE `election_candidates`;
USE `election_candidates`;

CREATE TABLE candidate_information (
  candidate_name VARCHAR(40) PRIMARY KEY,
  age INT,
  party_affiliation VARCHAR(15),
  years_of_political_experience INT,
  most_recent_position VARCHAR(50)
);


INSERT INTO candidate_information (candidate_name, age, party_affiliation, years_of_political_experience, most_recent_position)
VALUES
('Joe Biden', 81, 'Democrat', 48, '46th U.S. President (Current)'),
('Dean Phillips', 55, 'Democrat', 6, 'U.S. House of Representatives (2024)'),
('Nikki Haley', 52, 'Republican', 13, 'U.S. Ambassador to the United Nations (2018)'),
('Ryan Binkley', 47, 'Republican', 0, 'Businessman'),
('Robert F. Kennedy Jr.', 71, 'Independent', 5, 'Environmental Lawyer'),
('Cornel West', 72, 'Independent', 5, 'Professor of Philosophy'),
('Jill Stein', 74, 'Green Party', 5, 'Environmental Activist'),
('Donald Trump', 77, 'Republican', 4, '45th U.S. President (2021)');



