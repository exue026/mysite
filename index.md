---
layout: default
---

# About

Hi, my name is Ethan Xue! I'm a third year Sofware Engineering student at the University of Waterloo currently looking for an internship for January-April 2020.

I have four internships under my belt at companies like Cloudera and eero (a subsidiary of Amazon). My interests include distributed systems and open-source software development. I've contributed production code in C++, Python, JavaScript, Go, and Scala.

Some of my current/past hobbies include: NBA2K, basketball, swimming, travelling, anime, and weightlifting.

# Experience

## Cloudera - Software Engineering Intern

### Palo Alto, California | May - August 2019

* At [Cloudera](https://www.cloudera.com){:target="_blank"}, I worked on [Apache Impala](https://github.com/cloudera/Impala){:target="_blank"}, an open-source massively parallel processing SQL query engine for Apache Hadoop
* Wrote C++ and Python
* My primary project was to prototype replacing Impala's statestore daemon with etcd, an open-source distributed key-value store, to improve Impala's fault-tolerance and take the onus off of project committers to maintain the statestore
* Please take a look at my [design doc](https://docs.google.com/document/d/1F21b52EUUCs1RdcUY7I9wnicjOJCouSK6UEQSe8qq_4/edit) for more information
* I wrote a gRPC C++ client for etcd
* I added support in Impala for scanning tables stored as text files compressed using the deflate algorithm
* I also enhanced the usability of the Impala Shell by adding support for global impalarc configuration files, allowing global Impala Shell options to be configured by a sys admin

## eero, an Amazon company - Software Engineering Intern

### San Francisco, California | September - December 2018

* [eero](https://eero.com){:target="_blank"}, acquired by Amazon in 2019, develops smart home Wifi systems with mesh network technology
* Used Scala, Play, React, and Redux
* I worked on the Remote Network Management (RNM) product, a web platform that monitors, troubleshoots, and manages Wifi networks remotely
* I designed and implemented a scalable role-based permissions framework for allowing different features in RNM to be conditionally blocked on a per customer organization basis
* I also built a dashboard for viewing, searching, and modifying devices on a Wifi network using React/Redux

## Zenreach - Full-Stack Engineering Intern

### Kitchener, Ontario | January - April 2018

* [Zenreach](http://zenreach.com){:target="_blank"} was a late-stage startup headquarted in California that provides Wifi marketing solutions for businesses
* I used a variety of technologies including Go, Python/Django, React/Redux, Apache Kafka, Celery, and MongoDB
* I implemented a Go microservice with LRU caching to control feature activation across the main product for
7000+ businesses, using billing data and business hierarchies
* I used Go to bootstrap another service that utilized Kafka to make smart message sending event-driven and 15x faster than the previous architecture
* Added Redux to the product, reducing the size of the codebase significantly and fixing numerous bugs along the way

## Zeitspace Inc. - Software-Engineering Intern

### Kitchener, Ontario | May - August 2017

* [Zeitspace Inc.](http://zeitspace.com){:target="_blank"} was a product design and development consulting agency
* I pioneered an iOS application for the YMCA that delivered real-time updates and photos to thousands of families
* The main technologies I used include JavaScript/Node, Swift, and PostgreSQL

# Projects and Open-Source Contributions

## Apache Impala

* I worked on the backend of Apache Impala for four months
* I made contributions to the Impala statestore, scanner, and shell.
* Wrote C++ and Python

## Real-Time Executive for the Keil MCB1700
  
* As part of the University of Waterloo's Operating Systems course, spent 80+ hours with a team of three others to implement a simple OS kernel in C that provides a basic multiprogramming environment, preemption, memory management, message-based inter-process communication, a timing service, and system console I/O.

## Virtual Coin Exchange

* A virtual cryptocurrency trading simulator allowing users to create custom games and compete against friends
* Wrote the platform using Node, React, Redux, and MongoDB

## Spam Detector

* Implemented an email spam classifier written from the ground up and trained using logistic regression with regularization.
* I wrote the whole thing in Python using NumPy

## Lacs to MIPS compiler

* Wrote a basic system to compile a subset of Scala into MIPS machine code, with support for conditonals, loops, closures, and more
* Written in Scala

## Chatty

* iOS social media platform that connects users seeking to learn or improve on new languages
* I built the backend using Node, MySQL, and Heroku

## Poor Man's Paint

* Vastly simplifed version of Microsoft Paint, built using Java Swing
* Supports creation/editing of custom shapes, save/load, and system copy/paste.

## Straights

* Developed a GUI application invoking many design patterns that allows up to 4 people to play against each other or against bot(s) in a game of the card game Straights
* Used C++ and Gtkmm
