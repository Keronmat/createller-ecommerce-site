# React Ecomerce Website for Creatella Project

This is intended only for the Creatella's use. It is done has a test project, to show my abilities to Creatella. The application is built using the library React JS. The application still has a few bugs when using scientific functions.

![Homepage -large screen](https://github.com/Keronmat/createller-ecommerce-site/blob/master/src/assets/images/homepage.PNG?raw=true)
![Homepage - Side Panel Closed](https://github.com/Keronmat/createller-ecommerce-site/blob/master/src/assets/images/mobile.PNG?raw=true)
![Homepage - Side Panel Open](https://github.com/Keronmat/createller-ecommerce-site/blob/master/src/assets/images/mobile%20with%20sidedrawer.PNG?raw=true)

### Main Features

- Products are displayed in a grid.
- The user has an option to sort the products by "size", "price" or "id". The products list reloads when a new sorting option is chosen.
- Each product has a "size" field price field and date.
- The font-size (in pixels). The "price" is formatted as dollars like `$3.51`. The "date" field, displays relative time (eg. "3 days ago") ,unless they are older than 1 week.
- The product grid automatically load more items as you scroll down.
- An animated loading ("loading..." if CSS not wokring) message is shown while the user waits for the data to load.
  -\*\* to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time. But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- When the user reaches the end and there are no more products to display, the message "~ end of catalogue ~" is shown.

### Ads features

- After every 20 products a modal pops up with an advertisement from a sponsor. The same markup as the advertisement in the header shown in `public/index/html`,was used and `?r` query param is used to randomly generate a new image each time an ad is displayed.
- The Ads are randomly selected, A user never sees the same ad twice in a row.

###### Other feactures

- Responsive website
- Sign In and Sign up buttons.
- The user can add items to the cart.
- Total Items and prices are displayed
- Side drawer for mobile (<768px).

###### New Things I've learnt in this project

- Using window onscroll method along with other window objects to calculate the screen size for infinte scrolling.

- Using { responseType: "arraybuffer" } to received images form a server in binary data. Then you can convert back that data to be displayed on your website.

###### What is left to be done

- Add state manager sucher as redux.
- Add missing pages and links to complete the application (e.g:Directory link and checkout page).
- Test for bugs and fix.

## Installation

- clone the repository-`git clone https://github.com/Keronmat/creatella-ecommerce-site`
- Use terminal to browse to the repository - `cd creatella-ecommerce-site`
- Run the command - `npm install` /`yarn`
- Start the application - `npm start` `yarn start`

- npm install/ yarn start Runs the app in the development mode.<br>
  Set to be open on [http://localhost:3005](http://localhost:3005) to view it in the browser.

###### Get the Server up and running

- git clone creatella-ecommerce-server
- At any location on your computer in a folder, extract the SERVER files.
- Oper your terminal and move to the folder creatella-ecommerce-server -`cd creatella-ecommerce-server`.
- Run the command - `npm install` /`yarn`.
- Start the server - `npm start` `yarn start`

The server will now be up and running.

###### Both server and application needs to be up at the same time.

## Author

###### Keron Matthews
