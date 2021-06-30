# Bands in town architecture and design
## Project file structure
- Public/
  - index.html
  - robots.txt
- src/
  - assets/
    -  fonts/
    -  images/
       - background/
          - bg.png
          - mobilebg.png
  - components/
      - bandcard.jsx
      - eventCard.jsx
      - grid.jsx
      - loading.jsx
      - main.jsx
      - pagination.jsx
      - searchBar.jsx
  - styles/
    - card.scss
    - eventCard.scss
    - loading.scss
    - pagination.scss
    - search.scss
  - app.js
   - app.scss
   - index.js
   - .env
- .gitignore
- package.lock
- package-lock.json


## Features
- With the use of search bar, search any known band in the search bar to get the basic info of the band
- Get info about all future events of band with a detailed card in a grid. that includes country, city, venue, and date
- With the help of pagination, easily view all the future events of bands and navigate through all event pages.
- search events between different pages with the help of an event search bar and filter out custom events based on search query.
- Using local storage, any searched band that return valid results are cached, and next time that band is searched, local storage is used instead of calling data from api. Which one, removes the time constraint and second, it doesn't require the internet.
- App is optimized and responsive with the help of scss and media queries across all platforms. So anything that can be used on pc can also be easily used with mobiles phones.
- App has lazy loading implemented at the app startup, so it loads all the required data at the start.
- App is deployed on **heroku** and it can easily be accessed from anywhere.

## Architecture
Since it's a single page application and the main focus was frontend, considering this, it was decided to use react for frontend. Which helps design applications in modular fashion that is easy to handle and scale. Api data fetching was done with the help of **Axios** and **JavaScript** traditional promises using **async** methods.
search term is sent as a request to API endpoints and await is called until data is received. The data is then served into card components.

## Design choices
The purpose of this app was to display search results and events related to searched bands so as to make this app fully intuitive. App design was kept simple in terms of design with a large search box in the middle and a search button. App design is also forgiving in a sense that it doesn't throw any errors on wrong input like numbers or characters so flow does not disrupt. An additional search box is displayed after band events are found to filter out events. to make the app further easy to use, pagination is done so all events don't jumble up on a single page.

## Deployment strategy
App is deployed on **heroku** which is directly connected to its Github repo. Any changes to the repo reflect the changes automatically without taking down the app. Everything is live so any new changes are first built and checked and if it does not log any errors are then deployed. deployment only takes seconds so it's much faster this way.
 
