# Globe Spotter - Interactive Map

> Live demo [_here_](https://gleeful-sawine-18d74c.netlify.app).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)


## General Information
 App renders an interactive map with zoom controls using the Mapbox API. It fetches data from the REST Countries endpoint (https://restcountries.com/v3.1/all) and uses that data to render markers on the centroid of each country and text for the capital city of that country.

## Technologies Used
- React
- Typescript
- React-map-gl
- Deck.gl
- Mapbox
- Flowbite, TailwindCSS

## Usage
 - The markers are designed to display information about the country when clicked or hovered over. The tooltip displays country name. The onClick action displays detailed information about the country like flag, area and population.

## Project Status
Project is: _in progress_ 

## Screenshot
![Alt text](https://i.ibb.co/PcgJBkS/Zrzut-ekranu-2023-03-12-o-21-13-10.png "screen")

## Setup

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Room for improvement
- additional features
