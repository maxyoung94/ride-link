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

### 3.3 Communicate Between Components
Create a ServiceRow component to display a '<tr>' and children elements as well as
using '{this.props.whatever}' in '<td>', we then call '<ServiceRow />' twice in
ServiceTable, passing in data using 'id="{1}"' syntax, 1 is surrounded because it is a integer
and JSX gets confused, wrap it in JSX tags for it to output a string literal, i think?

### 3.4 Dynamic Composition
Create a global array of service objects.
In ServiceList, when calling ServiceTable, pass in the global array as a prop called 'services'.
In ServiceTable, use .map to create an array of ServiceRows, using service as the object 
handle, specify a key={service.id} and pass the single service object with 'service={service}'
In 'tbody', insert the list of service rows by using the JSX expression: {serviceRows}

## Step 4: Dynamic Updates

### 4.1 Create Initial State
add 'getInitialState' to ServiceList and return an object with 'services: dataList'
where using props before, replace with 'self.state.services'

# Abandoned, decided to just start Reacts tutorial as i keep finding this Hashnode one using a lot 
of deprecated tutorials and methods, loved the reflection format built around GitHub and will 
try to follow that proceedure in following repos.
