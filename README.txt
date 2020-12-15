This is a MERN stack web app for creating a six pokémon team and calculating that team's weaknesses.

What to install:
	in the project directory do the following commands:

	$npm install @material-ui/core
	$npm install @material-ui/lab
	$npm install react-router
	$npm install express

How to run app:
	You will need 3 terminal instances.
	These instructions assume you are in the
	PokemonCloud project directory.

	In terminal 1 do:
		./mongod -dbpath data/db

	In terminal 2 do:
		./src/server.js

	In terminal 3 do:
		npm start

	At this point npm should automatically open your browser to the appropriate port, but if not use 
	http://localhost:3000

Notes ran with IntelliJ, so there may be some behind the scenes installs that the IDE does that we are not aware of.

We're using React, so we don't have classes really. Instead of classes, we have JS functions based on React documetation.

The 3 main functions that replace html/express classes are: 
	App.js
	InputBox2.js 
	Results.js

- William Harer
- Spencer Ross