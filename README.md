# Project Name
# Climate Change API
## Description
This is a Node.js application that builds a RESTful API for retrieving news articles related to climate change from various news sources. The API is built using the Express.js framework, and it retrieves the articles by scraping the HTML pages of the news sources using the Axios and Cheerio libraries.

The API has three endpoints:

The root endpoint ("/") returns a welcome message.
The "/news" endpoint returns an array of all the articles that have been retrieved.
The "/news/:newspaperId" endpoint returns an array of articles from a specific news source, identified by the "newspaperId" parameter in the URL.
The news sources are defined in an array of objects called "newspaper", with each object containing the name, address, and base URL of a news source. The address is the URL of the page to be scraped, and the base URL is used to construct the full URL of each article.

When the API is started, it retrieves the articles from each news source by making HTTP requests using the Axios library, and then parses the HTML pages using the Cheerio library to extract the article titles and URLs. The articles are then stored in an array called "articles" and returned in response to the "/news" and "/news/:newspaperId" endpoints.

To deploy the API, you've used Heroku, which is a cloud-based platform that allows you to deploy and run web applications. Once you've deployed the API on Heroku, you can access it from anywhere using the API's URL.

Finally, you've also published the API on RapidAPI, which is a platform that allows developers to discover and use APIs. By publishing your API on RapidAPI, other developers can easily discover and use your API in their own projects.

## Getting Started
These instructions will help you get started with the project.

## Prerequisites
- Git
- Node.js
## Installing
Clone the repository to your local machine

<code>git clone https://github.com/username/projectname.git</code>

## Install the dependencies
<code>npm install</code>
### Running the project
To start the project, run the following command:
<code>npm start</code>

## Authors
Khang Nguyen Huynh
