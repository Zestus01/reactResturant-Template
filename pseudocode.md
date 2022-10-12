# React Resturant
## About: 
### A responsive webpage that will be a menu for a resturant. Menu will be cut up into sections of what the food is. Inside those sections it will be further broken up into area of food origin.

## HTML Elements
#### Originally single APP div
#### Header will be picure in top left or top right,
#### Header wil also have nav bar links 
#### Scrolling down will have each section(breakfest -> dinner -> app)
#### Each section will be broken up even more

# Javascript Section
### STATE Page
#### Page: What page is displayed IE breakfest items, dinner items, homepage
#### APIDATA: is an array of objects that holds the called data. 
##### APIDATA will be broken down into what time the menu item is usually eaten during
##### APIDATA will have 7 different arrays that hold the objects for each time to eat
#### Main File that will call the necessary file/functions 

## API CALL FILE
#### Will hold the API call URL using axios and portion up the data into an object that can used.
#### API CALL -> data -> (Breakfest, dinner) -> Dinner.american -> individual items
#### Async function
#### Returns the data to APIDATA. 

## WEBPAGE DISPLAY FILE
#### The functions in here will be displaying the header, menu items , and footers of the website
#### Calls the date object to change the color of the backgroudn depending on the time
##### Only changes the color when the render is called. 

### Header function
##### Renders the header by calling LOGO DISPLAY, TITLE DISPLAY, and NAVBAR DISPLAY
##### Each webpage will have the same header.

### LOGO Display
##### Just rendes the logo of the resturant
##### When clicked returns to the home page.

### Navbar display
##### Will be holding APPS, Breakfest, Lunch that when clicked will change the webpage.
##### Shading on the section button for whatever page section 

### Menu display
##### Uses the API data to call the 
##### Changes bases on what page is being displayed
##### Props passed will be the API data for that category IE Breakfest, apps
##### Formats the webpage to depict the title of the menu item, and description and title
###### Maybe a forEach loop that adds the neccessary data items. 
###### Intially dispays the menu tiems regardless of origin. Strech goal will display like origins together. 
###### Use an H4 for food title
###### P faded text for price
###### P element for the description 

### Footer Display
#### Same for each page
#### A link to the home page
#### Address section that is static, 
#### Maybe a map API if I get the time/motivation

## APP FILE
### On page load will the call API data function, That should return the data into the state.data of the page
###
