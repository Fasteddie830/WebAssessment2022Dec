# WebAssessment2022Dec

This project is made for the 2022 December Front End Web Development assessment. 

The project is based on NodeJS, Express, and React. 

How to run: 
1. CD into the backend folder
2. start back-end with node index.js
3. in a separate terminal, CD into the front-end folder
4. In parts of the project which uses specific ports, like FetchData.js and UpdateRating.js, ports might need to be changed.
5. Run front-end with npm start

To get a new dataset, or menu.db is missing, once back-end is running, type in "your-link-to-website/new", this creates a new set of dummy data. 

The scope of the project was to create a single page application, which enables users to look through recipes, search and filter them based on a few criteria;
give them the ability to bookmark favoured recipes, and have them be able to rate the recipes. 
The scope has been fulfilled with having a back-end structure and a small database controlled by NodeJS, Express, and NeDB, in an MVC pattern;
And for the front-end a React based single page web application. The users are shown recipes, which can be filtered through a search bar, which can
be further filtered by having to look for something specific in the recipe, e.g. serving size or ingredients. The users can bookmark recipes, which will be stored
in local storage, so even if they close the page, their saved recipes will load up just fine. At the end of the page, a small list will show up with all the
ingredients listed to all the recipes stored in local storage, a.k.a. only for the bookmarked recipes will this show. 

The website works well with any type of viewport and scale. 

The lecturer mentioned we should mention anything to be proud of as well. This website is far from the best, however there's a lot of work in the limited amount
of time we've had during our final year first semester. The design works well and showcases the dishes nicely. On the technical side, filtering works well,
and with the code in place it's easy to implement new filters. The rest of the code isn't hard to further either with proper knowledge, comments will make it
easier to navigate for any changes to be made. 
For data storage, this website uses both local storage and a back-end one as well, and can interact with both fully well. Even an external API dataset is imported.
A lot of small details like the favicon or website tab name has been changed and taken care of. 
Not the best by any means, but there has been a lot of effort put into it. 

All the changes made from the original design document have been made to better the look, feel, and ease of access for users, approved by family, especially little brother. After little brother's approval, I need no other justification for myself. 
