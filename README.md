
# Notes App

## Overview

Simple notes app with page to add notes and another to view list of notes. Notes are stored in a Firebase Realtime Database. 

Technologies used:
- React
- Redux
- Redux Saga
- Google Firebase

<img src="https://user-images.githubusercontent.com/100284595/223689141-d81b4e2e-53f3-47fd-ad25-6fd6d1a5818f.png" width="500">

<img src="https://user-images.githubusercontent.com/100284595/223689272-85d851a3-a6cd-4acf-a6a8-432395bd5dd0.png" width="500">


https://user-images.githubusercontent.com/100284595/223689840-94c7caf0-5a5f-4f10-a236-f117d5a94e70.mov

## Requirements

To run this project on your local machine, ensure you have the following things installed:

[Node.js LTS release](https://nodejs.org/en/)

[Git](https://git-scm.com/)

## How to Install and Run Project

Clone the repository into your desired workspace using the command

``` git clone https://github.com/rnxavier/saga-notes-app.git ```

Navigate into the notes-app root directory and install the dependencies using

``` npm install ```

To start the app on localhost:3000, run

``` npm start ```

## Adding Firebase to your Project

Create a firebase project, informtion on how to do this can be found on the official docs https://firebase.google.com/docs/web/setup 

In the src folder create a file called firebase.js

Configure firebase in this file, following the same format as the firebaseExample file already in the src folder 

In the firebase console set up a Realtime Database to store your notes and use this url in your saga


## Get in Touch
For any queries related to this project, including feedback on how it can be improved, please contact me at richelle.xavier@outlook.com.
