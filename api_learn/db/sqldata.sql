create database api_learn;
use api_learn;
CREATE TABLE IF NOT EXISTS `user_profile` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(50) NOT NULL,
 `email` varchar(50) NOT NULL,
 `password` varchar(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `job_title` varchar(100) DEFAULT NULL,
  `salary` double DEFAULT NULL,
 `create_datetime` varchar(200) NOT NULL,
PRIMARY KEY (`id`)
);