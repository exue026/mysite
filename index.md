---
layout: home
---

# About

Hi, my name is Ethan! I'm a third year Sofware Engineering student at the University of Waterloo interested in distributed systems, infrastructure, and DevOps.

I've contributed production-level code in Python, JavaScript, Go, C++, Scala, and Swift, using tools/libraries/frameworks such as React/Redux, NodeJS, Django, Play, Celery, and Kafka throughout my three internships.

I consider myself a Lifelong Learner. Adaptability and curiosity are two qualities I particularly value and strive to improve on as I become a better Software Engineer. With tech being such a large and fast growing industry, there's just so many more areas I have yet to explore. The journey of learning never ceases.

<strong>I'm currently looking for internship opportunities for the Summer 2019 term (May - August), so feel free to [email](mailto: ethan.xue@gmail.com) me if you're interested in chatting.</strong>

<br>

# Experience

## eero inc. - Software Engineering Intern

I'm currently interning on the Growth team at [eero](https://eero.com){:target="_blank"} in San Francisco. eero is a startup that creates smart home wifi systems that heavily leverage the Cloud, which is one of my main areas of development focus. I'm working on the Remote Network Management product, using technologies like Scala, Play, React, Redux, Jest. Two main projects I owned and completed are: Network Devices dashboard and Organization Permission Overrides framework.


## Zenreach - Full-Stack Engineering Intern

I worked at [Zenreach](http://zenreach.com){:target="_blank"}. Zenreach is a late-stage startup headquarted in California that provides Wifi marketing solutions for approximately 7000 businesses. Recently, they managed to raise $30 million in Series C funding,including contributions from NBA all-star Kevin Durant and actor/VC Ashton Kutcher.

Main technologies I used:
* JavaScript, Python, Go
* React, Redux, Sass, Django
* Kafka, Celery
* MongoDB
* Split.io, Prometheus, Goa

What I accomplished:
* Contact-list, a feature allowing a business to manage and analyze their customers.
    * Incorporated Redux, fixing numerous pre-exisiting bugs and reducing the size of the codebase significantly.
    * Completely refactored the UI/UX of the feature, making it much more user friendly and valuable for clients.
    * Implemented complex custom filtering and asynchronous bulk actions like bulk updating customer information and bulk undoing imported customers using Celery.
    * Performed A/B tests using split.io, which told us that the revamped contact-list increased user engagement by 40-50%.
* Unbundling the main product
    * Setup Go service using Goa and exposed metrics endpoints to Prometheus for the sake of load testing the service
    * Integrated a store interface that pulls billing data from Postgres
    * Implemented in-memory LRU caching and core logic for turning on and turning off various product addons using billing information, business tree hierachies, and gatekeeper data from Mongo.
* Event-driven smart messages
    * Implemented Go microservice that makes smart-message email sending event-driven by using Apache Kafka, resulting in a 15x increase in speed compared to the existing system
    * Reduced worst case time from hours to minutes

## Zeitspace Inc. - Software-Engineering Intern

I worked at [Zeitspace Inc.](http://zeitspace.com){:target="_blank"}, a recently-established product design and development consulting agency in downtown Kitchener. I was involved in the development and productionalization of two products, both with thousands of users.

Main technologies I used:
* JavaScript, Swift, Kotlin
* React, CSS, Node
* PostgreSQL, Heroku

What I accomplished:
* iOS and Android real-time news applications
    * Pioneered iOS and Android applications for the YMCA that delivered real-time updates and photos to the families of 6000+ children.
    * The iOS app had 90+ daily users at its peak, and 50+ for the Android app.
    * Contributed to the backend Node server supporting both mobile platforms
    * I implemented my own alg
    * orithm to efficiently aggregate user data in a background task and optimized SQL queries for Postgres, together which ultimately led to a boost in performance of data processing and delivery by 750%
* Web application for the SHORE centre
    * Implemented a RESTful web application using by React, Node, and PostgreSQL, featuring a JavaScript survey framework that generates dynamic surveys for web apps, which I contributed to building from scratch.
* Other
    * I developed and presented a 2+ hour hands-on technical workshop on Kotlin to 20+ industry professionals as an event on [meetup.com](https://www.meetup.com/Zeitspace/events/242825767/)

<br>

# Projects

The source code for all the projects can be found on [github](https://github.com/exue026?tab=repositories).

## Virtual Coin Exchange

A virtual cryptocurrency trading simulator allowing a user to create custom games, compete against friends to see who's the better money-maker, and monitor the hottest currencies on the market!

Main technologies I used:
* JavaScript
* React, Redux, React Router, Sass
* Node, MongoDB
* Heroku

## MantaDB

A distributed key-value database named after my swim club. Currently, a work in progress.

* 100% Go

## Lacs to MIPS compiler

Compiles a subset of Scala into MIPS machine code, with support for conditonals, loops, closures, and more.

Main technologies I used:
* Scala

## Spam Detection System

Chrome plugin with an email spam classifier written from the ground up and trained using logistic regression with regularization.

Main technologies I used:
* Python, Numpy
* JavaScript, HTML, CSS

## Chatty

iOS social media platform that connects users seeking to learn or improve on new languages. Built all views programmatically.

Main technologies I used:
* Swift
* Node, MySQL
* Firebase, Heroku

## 2D Marksmen Game

Developed a shooting game with a scoring and inventory system on the Arduino-based Tiva Microcontroller

Main technologies I used:
* C++
* Arduino

## Straights

Developed a GUI application invoking many design patterns that allows up to 4 people to play against each other or against bot(s) in a game of the card game Straights.

Main technologies I used:
* C++
* Gtkmm

## NBA Portal

Constructed a web crawler using Jsoup library that scrapes data regarding the NBA from ESPN’s website, displaying the information dynamically through a GUI, including daily NBA schedules, game results, and scores of live games in real-time

Main technologies I used:
* Java
* MySQL
