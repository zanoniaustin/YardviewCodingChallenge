# Yardview Coding Challenge
Build a simple task management app. The backend exposes a REST API for creating, reading, updating, and deleting tasks. The frontend consumes the API and displays tasks with filtering by status. No authentication is required.

## Stack
front-end: Angular, node version 20.19.6

back-end: Java 21, gradle 9.2.0

## Front-end
How to run:
```
npm build
ng serve
```
Front end was built on my Windows machine and I was continuing to get this error "CORS error: No 'Access-Control-Allow-Origin'" which I found is quite common on Windows machines when trying to make REST calls from a web page to my machine. So I sadly wasn't able to test the REST calls from front -> back. I have set up the calls so I believe they should be able to get the data back at least. No excuses for not fully completing the front-end requirements, and happy that it highlighted to me that I am rusty on my Angular/React capabilites and need to continue to improve in this area.

## Back-end
```
./gradlew clean build
```
Then I used the VSCode internal Java running functionality.

All REST calls tested with direct calls using a program called Postman, I have added all the test calls I used under https://github.com/zanoniaustin/YardviewCodingChallenge/tree/main/restApiCalls 

Tasks being stored in a Map locally.
