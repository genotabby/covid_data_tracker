# Developing a covid data comparator using react

## MVP
To create a platform where you can see and compare the latest data between countries


## Technologies & Tools used

- HTML
- CSS
- Javascript
- Github
- VSCode
- Vite
- Vercel
- React
- APIs
- Insomnia
- Airtable

## APIs used

https://coronavirus.m.pipedream.net/ 
<br>
https://disease.sh/v3/covid-19/countries/ 
<br>
https://airtable.com/


## Deployment
The game is deployed on Vercel and can be used here:<br>
https://tracking-api-sigma.vercel.app/

## Key Learnings
How to use React states and props 

## React states
To improve the performance of web apps, react renders all elements in a virtual DOM. Instead of refreshing the entire page when an element is changed, react breaks elements into components and reloads the specific components when their dependant states are changed. 

## React props
Props are data that has been passed from a parent component to a child, is read-only and immutable. Multiple props can be passed to the child. Compared to states which are used to display changes, props are used to communicate between components

## REST API
RESTful API is an interface that two computer systems use to exchange information securely over the internet and a few RESTful routes are:
- GET: Request a list of items from the API
- POST: Create a set of data
- PUT: Replace the set of data
- PATCH: Update one part of data
- DELETE: Delete the requested item from the database though the API

## Comparator page
The user can either compare the data between 2 countries by selecting the dropdown table

![](https://i.imgur.com/jwnzHzt.png)

or log in and save their preferences

![](https://i.imgur.com/AvCuvjr.png)

## Details page
You can filter the countries by continent

![](https://i.imgur.com/wFy5BuZ.png)

and click Detailed info to get the full data list including map coordinates and a map to see the country and the neighbouring regions

![](https://i.imgur.com/LBdI7HW.png)
