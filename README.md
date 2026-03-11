
Author       : HERRERA ARIEL                                          
Date Created : 12-MARCH-2026                                          
FILE NAME    : README.MD
FOR PROJECT  : CMSC 207 Mini-Project: Build a Personal Web Profile                                           
Website Name : https://asherrera1.github.io/CMSC-207-Mini-Project/

Project Overview
================
This mini-project is a stepping stone towards the final project and focuses on 
applying foundational web development concepts. Students will create a basic 
personal web profile, following the principles taught in Clyde Hatter’s book. 
The project will reinforce HTML structure, CSS styling, and basic 
JavaScript interactivity while keeping the scope manageable for mid-semester 
progress.



Project Objectives
=====================
1. Develop a structured and semantic HTML page.
2. Apply CSS to enhance layout, colors, and typography.
3. Use JavaScript for simple interactivity.
4. Implement responsive design for mobile and desktop views.
5. Get comfortable with debugging and refining their web pages.


Project Deliverables
=====================
1. Website structure - The website is a single-page website that contains the following sections:
   a. Header (Home):
   		Contains Name, Site title, navigation links.
   b. About Me: contains some info about the author, face picture and some fun facts.
		   - Clicking on the button underneath the photo shows 5 different fun facts.
		   
		c. Other Info
		   - This is an additional section showing my educational background,
		     work experiences, technical skills and other skills.
			 
		d. My Hobbies
		   - Named as "My Little Hobbies, My Little Hobbies".
		   - Was thinking of "My Little Ponies, My Little Ponies" while creating 
		     this section.
		   - To the left is a photo, and a button. The button shows 5 different photos
		     when clicked.
			 
		e. Contact Me
		   - Shows links to my email address, LinkedIn and GitHub.
		   
		f. Footer
		   - Shows the name of the website, the author, date created and FIC.
		
		
3. Technologies used
   a. HTML (name: index.html) 
      - The coding uses proper semantic tags , such as: <header>, <section>, <footer>.
	  - All of the basic info, and links to the images, names of javascript files used
	    are declared in HTML file.
      - Initially named as "CMSC 207 Mini Project - Ariel Herrera.html" during testing
	    in local drive. Later changed to "index.html" for usability in GitHub.
		
   b. CSS
	  - For modifying how the HTML gets displayed in a web browser.
	  - Each section has its own, separate CSS commands for readability. It's also 
	    easier for me to know which part in the CSS I need to change for a specific 
		section. Though, please note there are still some commands shared in some
		sections.
		
   c. JavaScript
	  - Though the GitHub folder does contain three Javascript files, only two are 
	    actively used in the web page, namely
		i.  FSW_GetFunFact.js - Allows to display 5 different fun facts about author.
		ii. FSW_GetPhoto.js.  - Allows to display 5 different photos.
	  - The Javascript is executed when the user clicks on specific buttons.
	  
   d. Basic CSS animations or transitions
      - In [CONTACT ME] section, when the user hovers over "Email Me", "Linked In", 
	    "GitHub" links, the font size increases fr 16px to 30px. The transition timing
		for font resize is 3s, background color by 2s.
	  - Visually, user can see the font grow when hovered over, and shrinks when cursor
	    is removed from the link.
	   

3. Features & Enhancements
   a. Navigation & Menu
	  - Anchor links are provided in the header section.
	  - The header uses "sticky" approach so it descends when the user scrolls down , and
        vice versa.
		
   b. Hover effects
	  - Header navigation links - the color changes to green, and an underline is shown
	    whenever the user hovers on a link.
	  - Next Fun Fact button - button color and font color changes when the user hovers 
	    over the button.
	  - Check Photos - button color and font color changes when the user hovers 
	    over the button.
	  - My contact info links - background color changes to blue when the user hovers 
	    over a link.
	  
	c. Javascript interaction
	  - When the user clicks on "Next Fun Fact" or "Check Photos", the relative content changes.
	  
	d. Mobile-Friendly layout.
	  - The web page has been tested over Chrome and Firefox browsers, and Chrome Mobile version
	    extension to test if the layout is friendly on mobile devices.

	
STUDENT REFLECTIONS:
====================		
1. Challenges Encountered
   a. Coming up with a name for the web page, the layout, the colors.
   b. The different How to questions, like:
      * How to make the layout ?
	  * How to make the image next to the text box ?
	  * How to do the Hover effect ?
	  * How to do this and that effect ?
   c. Testing across different platforms: local PC, mobile phone and 
      live on GitHub.
   d. Navigating GitHub and checking how to make the site viewable when using a repository link.


2. What did I learn from this Mini-project ?
   a. It's not easy to come up with a layout, a name or a design for a web page especially when
      creativity is a challenge.
   b. What works in one platform, may not visually be correct in another platform.
   c. CSS and HTML are super case-sensitive. I discovered this the hard way.
   d. When using a javascript.js in a web page, the variables or constants used must be 
      different. Else, the javascript won't work.
   e. Without CSS, the web page is just plain text: dull and boring.
      That said, CSS brings life to a web page.
   f. Using Visual Studio Code Editor helps to visually show any potential errors in HTML or CSS.
      * However, real errors can only be discovered at run-time when certain effects are not 
	    met, or javascript does not work.
   
				
TOOLS USED:
====================			
1. Notepad ++ 
   - For writing this Readme.txt
   
2. Visual Studio Code 
   - For writing HTML and CSS codes.

3. Google and Google Gemini
   - For references on specific commands, or how to achieve certain effects.
   - Google Gemini for creating the pictures of the beagle.
   
