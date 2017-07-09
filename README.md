## Step 1: Hello, World

### 1.1 index.html as a file
Use a single index.html file to import react, react-dom, and babel
from a CDN, use '<script>' tags to create a Hello world React app.
First use 'git init' and 'npm init', create index.html, 
add script srcs to cdn, create 'main' div to mount react, then 
use 'RenderDOM.render()' to mount a 'h1' hello world to the DOM

### 1.2 serve files with express
install express, save it to packages.json, create webapp.js to 
contain the express.js source code, write simple express code 
to serve files from 'static' dir.

## Step 2: Server-Side Babel

### 2.1 split the files
create a App.js, move the js from index.html to app.js, create src dir
to hold compiled App.js, run babel script with --watch to compile on save

## Step 3: Compose Components

### 3.1 use React.createClass()
make a ServiceList component, this component should list all the services history
a car has. use React.createClass(object)

### 3.2 Compose Components
make ServiceTable, ServiceFilter, ServiceAdd to display placeholder text for now.
The table will contain the rows of data, Add will be a section for adding new items,
and filter will be for finding specific service entries.
