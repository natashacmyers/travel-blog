<h1 align="center">Travel Blog</h1>

[View the live project here.](https://natashacmyers.github.io/travel-blog/)

This is a website for hosting a Travel Blog. It is designed to be responsive and accessible on a range of devices,
making it easy to navigate for all users.

## User Experience (UX)

- ### User stories

  - #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and easily navigate through to find content.
    2. As a First Time Visitor, I want to be able to register a new account.
    3. As a First Time Visitor, I want to be able to post a new blog (CRUD - CREATE).

  - #### Returning Visitor Goals

    1. As a Returning Visitor, I want to be able to log in.
    2. As a Returning Visitor, I want to be able to delete my blog(s) (CRUD - DELETE).
    3. As a Returning Visitor, I want to be able to edit my blog(s) (CRUD - UPDATE).

  - #### Frequent User Goals
    1. As a Frequent User, I want to be able to search for older posts.
    2. As a Frequent User, I want to be able to search for other users' blogs based on countries I may wish to visit (CRUD - READ).
    3. As a Frequent User, I want to be able to log out and switch users.

- ### Design
  - #### Colour Scheme
    - The main colour scheme is the based around nature. I have used sky blues and olive greens to keep the theme as natural as possible.
    - I have chosen to keep the background plain for easy reading, but the header is a sky picture to capture the eye and excite the user
      about travelling.
  - #### Typography
    - The Comfortaa font is the main font used throughout the whole website with Sans Serif as the fallback font in case
      for any reason the font isn't being imported into the site correctly. Comfortaa is a clean and informal font, which
      is appropriate for an travel blog site. The easy-to-read friendly look is inviting and creates a great UX.
  - #### Imagery
    - The main image used on this screen is in the header. This creates and eye-catching bold statement piece. The second image is the map,
      which is a [Google Geochart API map](https://developers.google.com/chart/interactive/docs/gallery/geochart), is a simplistic and easy
      to understand. 


* ### Wireframes

  - Map Page Wireframe on Mobile - [View](https://github.com/natashacmyers/travel-blog/blob/master/static/wireframes/Mobile%20Home%20Page.png)
  - Search Page Wireframe on Desktop (Logged In) - [View](https://github.com/natashacmyers/travel-blog/blob/master/static/wireframes/Desktop%20Search%20Logged%20In.png)
  - Register Page Wireframe on Desktop (Logged Out) - [View](https://github.com/natashacmyers/travel-blog/blob/master/static/wireframes/Desktop%20Register%20Logged%20Out.png)
  - Profile Page Wireframe on Tablet - [View](https://github.com/natashacmyers/travel-blog/blob/master/static/wireframes/Tablet%20Profile%20Page.png)

## Features

- Responsive on all device sizes

- Interactive elements

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JS](https://en.wikipedia/org/wiki/JavaScript)
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
- [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
- [MongoDB](https://en.wikipedia.org/wiki/MongoDB)

### Frameworks, Libraries & Programs Used

1. [Materialize 4.5.3:]()
   - Materialize was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to import the 'Itim' font into the style.css file which is used on all pages throughout the project.
3. [jQuery:](https://jquery.com/)
   - jQuery came with Bootstrap to make the navbar responsive.
4. [Git](https://git-scm.com/)
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
5. [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
6. [Balsamiq:](https://balsamiq.com/)
   - Balsamiq was used to create the [wireframes](https://github.com/natashacmyers/travel-blog/tree/master/static/wireframes) during the design process.
7. [Flask:](https://en.wikipedia.org/wiki/Flask_(web_framework))
   - Flask is a framework written in Python and was used to create connections and interactions between MongoDB and front-end HTML web pages.  
8. [FontAwesome:](https://en.wikipedia.org/wiki/Font_Awesome)
   - FontAwesome was used to add icons to the site, including social media links, for efficient user understanding.
9. [Heroku:](https://en.wikipedia.org/wiki/Heroku)
   - Heroku was used to deploy the site. 


## Testing

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) is used to test the responsiveness of the website and to debug any problems
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) is used to determine any overflow on the website
- [Validator.w3.org](https://validator.w3.org/) is used to validate the HTML code
- [Jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/validator.html.en) is used to validate the CSS code
- [JSHint](https://jshint.com/) is used to validate the JavaScript code
- [Pep8](http://pep8online.com/) is used to validate the Python code

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

  1. As a First Time Visitor, I want to easily understand the main purpose of the site and easily navigate through to find content.

     1. Upon entering the site, users are automatically greeted with an intuitive clickable map, when the user clicks anywhere on the map they will be shown blogs for that region. This will immediately
        help the user understand how to use the site.
     2. As the map shows smaller on the mobile devices, the Welcome paragraph will aid in the explanation of how the map works. 
     3. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.

  2. As a First Time Visitor, I want to be able to register a new account.

     1. Using the naivation bar on the top of the screen, the register page is clear and easy to find.
     2. The registration page is simple and quick to fill in, so the user can quickly finish this activity and start blogging.
     3. There is a clear 'To Log in click here' button at the bottom of the form, to re-direct a user that wishes to log in instead.

  3. As a First Time Visitor, I want to be able to post a new blog.
     1. Upon registering, the user will be presented with a different set of navigation bar tabs, including 'new blog'.
     2. The new blog form is similiar to the register form to increase intuitivity for the user and develop a theme for the site. 
     3. The user can upload images from their computer as well, giving the blogs a more dynamic feel.

- #### Returning Visitor Goals

  1. As a Returning Visitor, I want to be able to log in.

     1. The user can navigate to the 'log in' tab using the navigation bar at the top of any screen size and any page.
     2. The 'log in' form is similiar to both the 'registration' and 'new blog' form to increase intuitivity for the user 
        and develop a theme for the site. 
     3. The user will be re-directed to their profile page once logged in, so they can immediately view their own blogs.

  2. As a Returning Visitor, I want to be able to delete my blog(s).

     1. The user can navigate to their profile from anywhere on the page to view their blogs. 
        Alternatively, when searching for blogs either by the map or by the search page, the user can see their own blogs clearly as they
        will have a 'delete' button.
     2. The user can easily delete any blog that belongs to them by pressing the 'delete' button located to the right side of their blog post.
     3. The user will not be able to delete blogs that were not posted by them, which keeps other users' posts safe.


  3. As a Returning Visitor, I want to be able to edit my blog(s).

     1. The user can navigate to their profile from anywhere on the page to view their blogs. 
        Alternatively, when searching for blogs either by the map or by the search page, the user can see their own blogs clearly as they
        will have an 'edit' button.
     2. The user can easily edit any blog that belongs to them by pressing the 'edit' button located to the right side of their blog post.
     3. The user will not be able to edit blogs that were not posted by them, which keeps other users' posts safe.
     4. If the user chooses to cancel an edit, there is a 'cancel' button at the bottom of the 'edit' form.

- #### Frequent User Goals

  1. As a Frequent User, I want to be able to search for older posts.

     1. The user will be able to navigate to the 'profile' page using the navigation bar at the top of any screen.
     2. The profile page will display all the users' posts in time order, therefore the user will be able to scroll to see older posts.
     3. Ideally, in future updates of this site, a user will be able to use the 'search' page to search by date as well as by country name.

  2. As a Frequent User, I want to be able to search for other users' blogs based on countries I may wish to visit.

     1. The user can navigate easily to the 'search' page using the navigation bar at the top of any screen.
     2. The user can then search by country name, this will bring up all the blogs (including those made by the user) that are relevent to the 
        country of choice.
     3. In further updates for this feature, the user will be able to save favourite blogs to their profile and comment on other user's blog posts.

  3. As a Frequent User, I want to be able to log out and switch users.

     1. The user can navigate easily to the 'logout' tab using the navigation bar at the top of any screen.
     2. The user will automatically be logged out of their account and re-directed to the log in page.
     3. There is a clear 'To Register click here' button at the bottom of the form, to re-direct a user that wishes to register
        a new account instead.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

- The clickable map is best suited to a landscape device i.e. a tablet or a desktop. On a mobile device the map is less intuitive and easy to use.
  - This also results in a shorter screen, to add padding to the page and also for usability, a welcome paragraph has been added.
- Due to lack of time, not all the countries in the world have been added to the drop-down list for the 'new/edit blog' page, nor to the map. You
  can see which sections on the map have been activated as these are green instead of greyed out.
- View on a 'Galaxy Fold' is not great UX when viewing blogs. After several attempts to change the layout, there has been little to no improvement without affecting other devices.
  This would need more time to resolve.


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/natashacmyers/travel-blog)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://natashacmyers.github.io/travel-blog/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/natashacmyers/travel-blog)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/natashacmyers/travel-blog)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Creating Collections in MongoDB

1. Login to your MongoDB account
2. Create a **cluster**
3. Create a **database**
4. Create four **collections** in the database named:

    - **users**
    - **countries**
    - **blogs**

### Setting Up the Environment Variables
1. Create a file called **.gitignore** in the root directory of your project
2. Add the following text in your .gitignore file: **env.py**
3. Create a file called **env.py**. This will contain all your environment variables
4. Create your own personal secret key and password. In **env.py** add the following text and replace **YOURPASSWORD**, **YOUR-CLUSTER-NAME**, **YOUR-DATABASE-NAME** and **YOURSECRETKEY**    

[environment-variables]: https://github.com/natashacmyers/travel-blog/master/static/img/env-file-example.png

### Run the App 
1. Open your terminal window in your IDE
2. Type in **python3 app.py** to run the app

### Heroku Deployment
1. Create a Heroku account
2. Create a new app and select your region
3. In the terminal window of your local IDE type **pip3 freeze --local > requirements.txt** to create a requirements.txt file. This file is needed so that Heroku knows which files needs to be installed
5. In the terminal window of your local IDE type **python app.py > Procfile** to create a Procfile. This file is needed so that Heroku knows which file is needed as its entry point to get the app up and running
6. In the terminal window of your local IDE type in **heroku login** or **heroku login -i** and fill in your heroku credentials and password
7. Commit all your files and type in the same terminal window **git push heroku master**. Now all your files are committed to Heroku
8. Go back to your Heroku account and go to **settings**
9. Click on **Reveal Config Vars** to reveal the keys and the values
10. Set the keys and values as follow:
    (**KEY: VALUE**)
    - IP: 0.0.0.0
    - PORT: 5000
    - MONGO_DBNAME: YOUR-DATABASE-NAME
    - MONGO_URI: mongodb+srv://root:**YOURPASSWORD**@**YOUR-CLUSTER-NAME**.2qobt.mongodb.net/**YOUR-DATABASE-NAME**?retryWrites=true&w=majority
    - SECRET_KEY: YOURSECRETKEY
11. Click on **Open app** in the right corner of your Heroku account, the application will open in a new window
12. The live link is available from the address bar


## Credits

### Code

- [Google Charts](https://developers.google.com/chart/interactive/docs/gallery/geochart): The clickable interactive map used on the front page of this site is from Google Charts.

- [MaterializeCSS](https://materializecss.com/): I used the Materialize CSS Library throughout the project to improve styles of objects and to make the site responsive using the Materialize Grid System.

- [Stack Overflow](https://stackoverflow.com/): I used Stack Overflow for inspiration to integrate the interactive map into my site.

### Content

- All content was written by the developer.

- Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Acknowledgements

- My Mentor for continuous helpful feedback.

- Tutor support at Code Institute for their support.