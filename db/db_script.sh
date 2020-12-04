#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "docker" -d "docker"  <<-EOSQL
     CREATE TABLE topics(
    id serial NOT NULL,
    description VARCHAR(30) NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE tools(
    id serial NOT NULL,
    topic_id int NOT NULL,
    description VARCHAR(20),
    PRIMARY KEY (id),
    CONSTRAINT fk_topic_id FOREIGN KEY (topic_id) REFERENCES topics (id)
);

CREATE TABLE posts(
    id serial NOT NULL,
    title VARCHAR(200),
    content VARCHAR(200) ,
    photo_url VARCHAR(220),
    user_nick VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE chapters(
    id serial NOT NULL,
	post_id int NOT NULL,
    topic VARCHAR(150) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    content VARCHAR(9999) NOT NULL,
	code VARCHAR(9999) NOT NULL,
    photo_url VARCHAR(150) NOT NULL,
    PRIMARY KEY (id),
	CONSTRAINT ch_post_id FOREIGN KEY (post_id) REFERENCES posts (id)
);

CREATE TABLE tools_posts(
    tool_id int NOT NULL,
    post_id int NOT NULL,
    PRIMARY KEY (tool_id, post_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE,
  FOREIGN KEY (tool_id) REFERENCES tools(id) ON UPDATE CASCADE
);
EOSQL