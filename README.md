[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=12872666)
# Resume 💼🏢💻📄🗂📎🗄️🏦📠🖇🖨📱📧

You will utilize GitHub Pages to create a host your resume

## Part 1 - Instructions

You will have to create this project from scratch using plain HTML, JavaScript, and CSS.

This website will include:

* At least four pages that you can navigate to, consider index, about me, projects, socials, bio, demo real, portfolio, etc.
* Have at least two interactive JavaScript components that alter the view but are also accessible with a keyboard. Consider a button to switch between light and dark mode themes, a switch to change languages from English to Spanish, something to change the font sizes, go to high contrast mode, etc.
* Include a professionally written, styled, and presented resume. Visit with the career services people to have them look it over.
* Create your own favicon.
* Publish your website onto GitHub Pages.

You can utilize open-source CSS, but it must be cited and adapted to your needs.

Be sure that you have:

* Validated your HTML using [validator.w3.org](https://validator.w3.org/) to ensure no errors nor warnings.
* Verify that you are well documenting your code using [JSDoc](https://www.npmjs.com/package/jsdoc) standards. You do not need to generate an API.
* Ensured that you write satisfactory unit tests and that your code passes them, with **75%** coverage for non-view related tests.
* Include View Testing with puppeteer to ensure your website is updating as expected.
* Test your color contrast by visiting [a11y.com](https://color.a11y.com/).

**Optional**:

Purchase a domain name for your site and link it to your GitHub pages. I've used Google Domains, recently purchased by SquareSpace, with usually costs $1 for a domain name such as [www.oscarveliz.com](www.oscarveliz.com) and it is always a good idea to at least grab your name before someone else does. See [https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for more information on how to do this.

## Part 2 - Reflection

Add screenshots below showing,

* Your app running on GitHub Pages
<img width="1091" alt="Screenshot 2023-11-24 at 12 55 53 PM" src="https://github.com/CS5610-Seattle-Fall23/resume-yej002/assets/49883143/04651bcf-bf45-41df-bb44-6bebab13c428">

Link: https://cs5610-seattle-fall23.github.io/resume-yej002/

* Your html validation
<img width="760" alt="Screenshot 2023-11-24 at 1 00 12 PM" src="https://github.com/CS5610-Seattle-Fall23/resume-yej002/assets/49883143/4c4982b9-9635-42f5-9305-e25affdf7c65">


* Your code coverage

<img width="637" alt="Screenshot 2023-11-24 at 4 43 51 PM" src="https://github.com/CS5610-Seattle-Fall23/resume-yej002/assets/49883143/cb670ace-45e8-4b72-9527-b66bd447cd3a">



* Your view testing
  

<img width="1194" alt="Screenshot 2023-11-25 at 5 27 46 PM" src="https://github.com/CS5610-Seattle-Fall23/resume-yej002/assets/49883143/698f0ad6-fe27-49a6-baa5-c03e8bd87597">


## Update the README to answer the following questions:

 ## 1. Identify the interactive JavaScript elements of your website and explain how you implemented them.

The interactive javascript elements that I have are `Modal Popup for Blog Posts`, `Sidebar Toggle`, and `Project Category Filter`. 

Modal Popup for Blog Posts: When you click on a blog post, a popup (modal) shows up with more details about my travel blog. Each blog post item has a picture cover, and it can be clicked to show a designed modal. The modal includes a title, date, and all the pictures and intro texts of my trip. All information is automatically transferred from my edited post to the modal. If you click the close button or the area outside the modal (overlay), the modal closes.

Sidebar Toggle: When you click the sidebar button, the sidebar shows up or hides. This is done using a button (sidebarBtn) and a function that adds or removes the 'active' class to show or hide the sidebar. I use this sidebar to show my personal contact information(top right corner). If you cannot see the sidebar, try adjusting the width of your browser to smaller. 

Project Category Filter: When you click on the category tab on the Portfolio page, the project is filtered by the category name. It allows users to interact with the filter buttons to filter and display content dynamically based on their selection.


## 2. What specific feedback did the career services people give you about your resume?

I don't have much feedback on the content of my resume, mainly just some formatting stuff. They think my resume looks pretty good.

## 3. What aspects of this project did you find particularly challenging and why? Explain how you overcame them.

I think the most challenging part is implementing the `Modal Popup for Blog Posts`. Working with modal in HTML was a new skill for me, as we hadn’t covered this in class. I sought guidance from tutorials and drew inspiration from examples set by other developers. Initially, I kept the content of my blog post items simple at first – just a cover, a title, and a short sentence. My approach was all about trial and error, constantly tweaking the code and refreshing the HTML to see if things were shaping up. It was quite time-consuming but really satisfying. When I finally finished I felt like I accomplished an achievement.

## 4. Explain how you created a custom favicon for your page.

I visited `favicon.io` and downloaded the favicon zip from there.

## 5. Write a short essay about what you've learned in this class so far. Think about all the technologies we've used, the activities you've done, the programs you've made, and how far you've come. Describe your experiences in at least 20 sentences with specific examples from this course.


Time flies, and the semester is almost over. In this short term of web development learning, I have acquired many practical development skills. Initially, we delved into the foundational elements of web development, focusing on HTML, JavaScript, and CSS. These building blocks laid the groundwork for more complex tasks that would soon follow.

One of the most exciting milestones was learning to call APIs in web pages, culminating in the 'Pick Your Own API' project. This was a remarkable moment in the course for me. For the first time, we were asked to have our own ideas on page design and the content to show. I've also learned to use Puppeteer for view testing.

Another significant skill I developed was writing unit tests. I've come to understand the critical role that testing plays in the software development lifecycle, particularly in larger, collaborative projects. Writing unit tests gives us proof that the functionality of the new code is working as expected, the new code does not break the existing functionalities, and also prevents others from unintentionally breaking our functionalities. It's a skill that not only enhances the reliability of the code but also builds a foundation for sustainable development.

My favorite part of this course was undoubtedly the creation of my personal website. It's a project I've long aspired to undertake but never found the right opportunity to embark upon. This course not only provided me with the opportunity but also the time and resources needed to bring my design to life. I even registered a domain for my personal website. The personal website is not just a project, it's a platform where I can showcase my skills, share my experiences, and chronicle my growth. I appreciate the opportunity and I will keep updating my website along the way.

In conclusion, this web development course is far more interesting than I thought, and it taught me a bunch of practical skills in development. I will definitely recommend this course to other students by any chance.


