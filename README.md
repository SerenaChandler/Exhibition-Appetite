# Expedition Appetite

Expedition Appetite is an application a user would use to get travel details/directions and find nearby food options like restaurants, near your destination. The user would first enter their *travel details* and tell us what *type of food* they were interested in. Then we would return back their travel details from a Google API and restaurant details of the Yelp API.

Now the user has their travel itinerary and options for places to eat!


## Objective of Project

This is our project of a group assignment which included the team members Jake Novelli, Serena Chandler, and Cheng Tang.



## Acceptance Criteria





## User Stories

Here are the User Stories we used to create our application.

![UserStory-1](./assets/user-story/user-stories.png)


## Wireframe vs Final Product

We started with a general idea of the page layout knowing that we would need:
1. A `<form>` for user input
2. A `<modal>` for user validation
3. Several `<button>` for previous search history
4. A `<div>` for the travel details
5. A `<div>` for the food details

![wireframe-vs-final-product](./assets/wireframe/wireframe-vs-final-product.PNG)


## Technologies & Features Used

**High Overview of Technologies used**
[Materialize CSS](https://materializecss.com/)
[jQuery](https://jquery.com/)
[SweetAlert.js](https://sweetalert.js.org/)


**Materialize CSS**
We decided to use Materialize CSS for our framework due to the design language/styling, the simplicity of their documentation, and the ease of implementating their features.


**Media breakpoints**
Materialize CSS made has a get structure for their page layout and made it easy to implement **media breakpoints**

In our application, we employed 2 different breakpoints:
    - Medium - 33%
    - Small - 100%

Below is a sample of our code and how our application looks when resized:

```
<div class="row">
            <div id="searchArea" class="col s12 m4 l4 white-text">
                <h3>Search Area</h3>
                <form>
                    <div class="input-field">
                        <input class="originCity white-text" type="text" placeholder="Origin City">
                        <label for="origin-city"></label>
                    </div>
```
![breakpoints](./assets/images/media-screens/media-screen-breakpoints.gif)



## Demo
## Explaination of the code





## API Used





## Deployed Link





## Future Development





## Contributors
LinkedIn Profile
GitHub Profile



## Workflow Structure





### License




### Acknowledgements




## getting started
To get started, you can download the entire repository and start by opening the **index.html**
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