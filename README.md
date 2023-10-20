# WillSmithExtension
Made a simple chrome extension that replaces most of the images used in any website to a random Will Smith image
I wanted to get started and comfortable with Javascript.
Tutorial Link: https://www.youtube.com/watch?v=zHIryKuhYA4

Built completely with Javascript 
-can use React or other framwork to build but just for the sole purpose of understanding how it works, we will use Js
Start with opening a folder in VS code
Create manifest.json file 
This is the entry point of application
You'll define things related to your extension
essential:won't be able to deploy the extension without this file

content_scripts - files that are gonna handle the app - It is an Array as we are passing diff values

comments are not permitted in Json files 
/* { Object */
values related - matches property - solves bugs in regards to deploying ["<all_urls"]
create js file

js content file 
create array that will have the random images links that you'd add

Example: 
open yt 
DOM - inspect elements
LOGIC: 
replace images
every single eleemnt that is an image 
replace with a diff value
change src property - every image has src property
replace with links 

Using for loop to traverse the array of random images
