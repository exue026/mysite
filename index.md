---
layout: home
---

# About

Hi, my name is Ethan Xue! I'm a third year Sofware Engineering student at the University of Waterloo currently looking for an internship for January-April 2020. You can reach me by [email](mailto: ethan.xue@gmail.com).

I have four internships under my belt at companies like Cloudera and eero (a subsidiary of Amazon). My interests include distributed systems and open-source software development. I've contributed production code in C++, Python, JavaScript, Go, and Scala. For a more detailed description of my skillset and background, please check out my [resume]().

# Experience

## Cloudera - Software Engineering Intern

### Palo Alto, California | May - August 2019

* Worked on Apache Impala, an open-source massively parallel processing SQL query engine for Apache Hadoop
* Wrote C++ and Python
* My primary project was to prototype replacing Impala's statestore daemon with etcd, an open-source distributed key-value store, to improve fault-tolerance and take the onus off of project committers to maintain the statestore
* I also added functionality to the Impala shell to support global impalarc configuration files
* I also added support to scan and decompress deflate files for tables stored as text

## eero (a subsidiary of Amazon) - Software Engineering Intern

### San Francisco, California | September - December 2018

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

# Projects and Open Source Contributions

The source code for most of the projects can be found at [github](https://github.com/exue026?tab=repositories).

# Apache Impala

Mostly worked on the backend of Apache Impala.

* C++

## Virtual Coin Exchange

A virtual cryptocurrency trading simulator allowing a user to create custom games, compete against friends to see who's the better money-maker, and monitor the hottest currencies on the market!

Main technologies I used:
* JavaScript
* React, Redux, React Router, Sass
* Node, MongoDB
* Heroku

## RTX System

Real-time Linux Kernel.

* 100% C

## Lacs to MIPS compiler

Compiles a subset of Scala into MIPS machine code, with support for conditonals, loops, closures, and more.

Main technologies I used:
* Scala

## Spam Detector

Email spam classifier written from the ground up and trained using logistic regression with regularization.

Main technologies I used:
* Python, Numpy

## Chatty

iOS social media platform that connects users seeking to learn or improve on new languages. Built all views programmatically.

Main technologies I used:
* Swift
* Node, MySQL
* Firebase, Heroku

## Poor Man's Paint
Simplifed version of Microsoft Paint, built using Java Swing. Supports creation of custom shapes, save/load, and system copy/paste.

* Java
* Swing

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

## Mannequin Manipulation

Built an Android application that let's the user interact with a character using direct manipulation. Supports translation, rotation and scaling of limb, by using Affine transformations.

Main technologies I used:
* Android studio
* Java

## NBA Portal

Constructed a web crawler using Jsoup library that scrapes data regarding the NBA from ESPN’s website, displaying the information dynamically through a GUI, including daily NBA schedules, game results, and scores of live games in real-time

Main technologies I used:
* Java
* MySQL

# Books and Papers I'm planning to read
* UCB: architecture of a db
* The Linux Programming Interface
* Designing Data-Intensive Applications
* Raft Consensus Algorithm Paper
* Google MapReduce
