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

-- INSERT INTO public.topics(
-- 	 description)
-- 	VALUES ('Cloud');
-- INSERT INTO public.topics(
-- 	 description)
-- 	VALUES ('Virtualization');


-- INSERT INTO public.tools(
-- 	 topic_id, description)
-- 	VALUES ( 1, 'AWS');
-- INSERT INTO public.tools(
-- 	 topic_id, description)
-- 	VALUES ( 2, 'Kubernetes');
-- INSERT INTO public.tools(
-- 	 topic_id, description)
-- 	VALUES ( 1, 'GCP');
-- INSERT INTO public.tools(
-- 	topic_id, description)
-- 	VALUES ( 2, 'Docker');
-- -- select all tools depend on topic
-- SELECT distinct tools.description
--  FROM tools
--  INNER JOIN topics
--  ON tools.topic_id = 2



-- create post

--FOREIGN KEY (tool_id) REFERENCES tools (tool_id) ON DELETE CASCADE

--chapters belong to post, one post multiple chapters, desc id
--add chapter to post




--GET POST BY TOOL

-- SELECT  posts.id,posts.title, posts.content,posts.photo_url, tools.description
-- 	FROM posts
-- 	left join tools_posts on (tools_posts.post_id = posts.id)
-- 	LEFT JOIN tools ON (tools.id = tools_posts.tool_id)
-- 	WHERE tools.description LIKE 'AWS'


-- SELECT  posts.id,tools.id, tools.description
-- 	FROM tools
-- 	left join tools_posts on (tools_posts.tool_id = tools.id)
-- 	LEFT JOIN posts ON (tools.id = tools_posts.tool_id)
-- 	WHERE tools.description LIKE 'AWS'


--get chapterrs from posts

-- SELECT  posts.*, chapters.*
-- 	FROM public.posts
-- 	left join chapters ON (posts.id = chapters.post_id);







-- SELECT posts.post_describe, chapters.description 
-- 	FROM public.posts
-- 	RIGHT JOIN public.chapters ON posts.post_id = chapters.chapter_id


SELECT * FROM chapters;
SELECT * FROM posts;
SELECT * FROM tools;
SELECT * FROM topics;

INSERT INTO topics(
	 description)
	VALUES ('Virtualization');

INSERT INTO tools(
	 topic_id, description)
	VALUES ( 1, 'AWS');
	
INSERT INTO tools(
	 topic_id, description)
	VALUES ( 2, 'Kubernetes');
	
INSERT INTO tools(
	 topic_id, description)
	VALUES ( 3, 'VPN');

SELECT * FROM posts_chapters;

