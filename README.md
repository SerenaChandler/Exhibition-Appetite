# Project 1 "Expedition Appetite"

## Summary of assignment
We were tasked with creatig a new web program from thr ground up. We had a few pre requestists that we had to fulfil, namely

-2 different servierside APIs had to be used, in this case we used both Good Maps's API, as well as the Yelp API

-we had to use a new framework. Previously we had experience with bootstrap, but for this assignment we had to implement a new framework

-2 different libraries also had to be implemented 

## getting started
-before we even thought about coding, a large portion of the project started with planning.

-from the get go, we had planned on using a google maps API, although the original idea was to have it work with flu data, and give the user data on whether it was safe to travel.

-We ended up running into some trouble with the flu API, and after much brainstorming, ending up deciding instead on using a Yelp API, to give users feedback on local restaurnts in sreas they travel to.

## languages used
html- HTML wa sused as the basic building block for the website. 
JS- Javascript was used to create the interactible elements of the page
Jquery - importing the JQeury library allowed us to implify the sytntax, and more easily append elements to the page
Materialize - this was the main  framework that was used to build the layout of the page
CSS - CSS was used to apply specific elements to pieces of the page

## Prewview of the website

![image](siteGif.gif)


## code snippets (used to ensure user enters input data)
```
    if (requirements.origin === ''){ 
            swal({
                title: 'You did not enter an Origin!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            }) 
```

## code snippet ( How we used the APIS)
```
 $.ajax({
                url: googleAPI,
                method: 'GET'
            }).then(function(response){
                console.log(response);
                // Appending list items for previous searches
                searchHist.append('<a class="col waves-effect waves-light btn history" style="width: auto" data-prevSearch="search1">' + requirements.dCity + ', ' + requirements.dState + '</a>');
````