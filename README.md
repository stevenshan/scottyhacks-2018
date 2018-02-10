# CoursePlanner
Can be found [here](https://me.stevenshan.com/scottyhacks-2018)

# Inspiration
As academics are such an important part of CMU life, being able to plan out which courses to take throughout one’s time here is a useful tool to have. One of of the difficulties with course planning is that there is such a wide variety of interesting courses offered. To help facilitate and simplify the course selection process, we wanted to create a website that clearly shows which courses are major requirements and what taking one course can allow you to take in the future. Mapping out possible paths of courses allows students to envision their future course selections. 

# What it does
Currently, the academic audit is antiquated and is hard to read, while SIO is difficult to navigate to find all courses a student may want to explore. CoursePlanner allows students to have a clear visualization of their education path at CMU. 

Students and advisors alike can use CoursePlanner to organize past courses and plan for the future all at once. Students can easily add past courses to their schedule history, and each course box includes the course code, course title, number of units. Moreover, when adding potential courses, students can easily see whether or not they have satisfied the prerequisites for the specified course. This is especially useful for students planning ahead to explore their options, and simplify the stressful process of course selection, without the need to sift through various different sites and course codes. Additionally, the pop up window gives students the full course description and information they would find on SIO, so there would be no need to navigate back and forth when using our app.

# How we built it 
With ScottyLabs's API, we were able to obtain the bulk of the information we used to build CoursePlanner. Furthermore, we gathered information from School of Comuter Science website for major requirements for computer science and computational biology. We designed the webpage with HTML, CSS, Javascript. To draw the lines connecting the prerequisites of courses, we used paper.js, and used JQuery to display the popup windows when hovering over a course. We downloaded icons from Material Design for the buttons on our website.

# Challenges we ran into
Since the CMU audit is being updated next month, it wouldn't be useful for use to scrape data from a website that will be obsolete within the month. Thus, we went to the School of Computer Science website to look into the requirements for a computer science major. While going through all the requirements we realized that for nearly every requirement there was, there was an exception, ranging from anti-requisites to grade requirements to year restrictions. This made it extremely difficult to document the major requirements in a organized manner.

# Accomplishments that we're proud of
We are proud of how our interface looks -- we wanted it to be simple and clean. Additionally, we are happy to have achieved a majority of our goals, despite lacking some of the information from the academic audit. The graphical structure lays everything out for the students, and we hope that is a step of improvement for this important process of student life. (We are also very proud of winning some raffles.)

# What we learned
Most of the members of our group had little experience in web dev coming into this hackathon, so we were able to learn more about the process, and have hands on experience. We also learned how to better integrate visualization of data into a web application.

# What's next for CoursePlanner
We would like to add a back end and possibly use data that we could scrape from the new academic audit website to further upgrade our site to help students visualize which classes they must and want to take. This would enable us to add in major and minor requirements, and generalization to the entire school.

# Built with
ScottyLabs API, HTML, CSS, Javascript, Microsoft Azure, paper.js, jQuery, Material Design icons

