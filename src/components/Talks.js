import React from "react";

const Talks = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Talks</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Reduce System Fragility with Terraform</h3>
          <p className="info">
            Infrastructure as Code
            <span>&bull;</span>
            DevOps
          </p>
          <p>
            As infrastructure stacks grow increasingly more complex and involve an ever-growing 
            number of services and systems there are a lot of opportunities for error and misconfiguration. 
            To provide more system stability teams have looked to abstract configuration to its own 
            layer of code. This concept of configuring infrastructure as code is gaining traction 
            throughout the industry for a variety of reasons. It's fast, consistent, reduces errors, 
            self-documentation, and did I mention it's fast? Tools such as Terraform from HashiCorp 
            have emerged as one of the leading ways to declaratively configure technology stacks.

            In this talk you'll gain an understanding of the benefits of Infrastructure as Code in 
            general, and of using Terraform specifically. You'll be introduced to how Terraform works, 
            what the code looks like, and how to get started.
          </p>
        </div>
      </div>            
      <div className="row item">
        <div className="twelve columns">
          <h3>Modules, Loops and More: How to Scale with Terraform</h3>
          <p className="info">
            Infrastructure as Code
            <span>&bull;</span>
            DevOps
          </p>
          <p>
            Terraform has become vital to your team's workflow for managing your infrastructure. However, as 
            your infrastructure has grown your code has become more complex, needlessly messy, and harder to 
            manage. In this talk we explore ways to simplify your infrastructure code even while you add more 
            resources to your infrastructure. We'll dive into advanced features in Terraform such as modules, 
            workspaces, for_loops, and data sources to build reusable, scalable infrastructure. By the end of 
            this talk, you will have a solid understanding of how to use Terraform to scale infrastructure in 
            a reliable and efficient way.
          </p>
        </div>
      </div>      
      <div className="row item">
        <div className="twelve columns">
          <h3>What the Heck Is HTTP?</h3>
          <p className="info">
            Network
            <span>&bull;</span>
            Development
          </p>
          <p>
            You see it on the front of URLs. You know that it's important to APIs. When you write applications 
            that are connecting to services on other machines you're using it. So you're likely using it in everything 
            you build. But, what the heck is HTTP, really? 

            In this talk, we'll dive into the mechanics of HTTP starting from requests & responses, diving into 
            nouns & verbs, and going deep into the mechanics of how authentication works over the protocol. Come 
            join us as we learn all about something that most of us use everyday.
          </p>
        </div>
      </div>      
      <div className="row item">
        <div className="twelve columns">
          <h3>Built-In Testing in Go is More Than Just Passable</h3>
          <p className="info">
            Go
            <span>&bull;</span>
            Testing
          </p>
          <p>
            Testing is vital to any software project. Automated tests help improve 
            confidence in code changes as you increase project velocity. Finding the right 
            tools and libraries can be an arduous process. And, in most languages, adding 
            testing means adding a pile of new dependencies to the project. But, have you 
            ever tried the tools built right into the language? One of the beauty's of the 
            Go programming language is built with productivity in mind. The creators of the 
            language have included many tools that make developers productive--including a 
            robust testing framework. Come see how easy it is to get started with Go's testing 
            library and see many of the features that will keep you using it in all your projects.
          </p>
        </div>
      </div>      
     
      <div className="row item">
        <div className="twelve columns">
          <h3>Flexbox + CSS Grid = Awesome!</h3>
          <p className="info">
            CSS
            <span>&bull;</span>
          </p>
          <p>
            The traditional 'box' layout model was designed to layout documents, not 
            apps. Many hours have been lost endlessly tinkering with the positioning 
            of HTML elements, but the joy at achieving perfect alignment is short-lived. 
            Everything looks great until the page is loaded on a mobile device, and it 
            looks like you threw things on a page from across the room. There's a better 
            way!
          </p>
          <p> 
            In this talk I will teach you about the flexbox layout model and CSS grid. 
            We will cover these concepts at a high level, discuss why they are a better 
            approach, and I will show you how to use them effectively. Used in tandem, 
            these widely supported techniques can make your pages responsive, more accessible, 
            and easier to build.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Why Loop in JavaScript When You Can Map, Reduce or Filter?</h3>
          <p className="info">
            JavaScript
            <span>&bull;</span>
            Functional Intro
          </p>
          <p>
            Traditionally, when developers see large arrays of data their "go to" 
            tool for parsing and searching has been the for loop. But JavaScript 
            provides a more declarative approach that can help you find what you're 
            looking for in fewer lines of code that is cleaner, easier to read, and 
            maintain. Come see how the map(), reduce(), and filter() functions can 
            help you!
          </p>
        </div>
      </div>      
      <div className="row item">
        <div className="twelve columns">
          <h3>Performance Cage Match: (Map, Filter and Reduce) vs For Loop</h3>
          <p className="info">
            JavaScript
            <span>&bull;</span>
            Performance
          </p>
          <p>
            Functions built in to the Array object, like Map, Filter, and Reduce make 
            our code more declarative and readable. But, how do these functions perform 
            against for and forEach loops? Come watch these methodologies go head-to-head 
            as we see just how fast each of these functions compare to similar loops!
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Connecting the Dots: How Angular Components Work Together</h3>
          <p className="info">
            Angular
            <span>&bull;</span>
          </p>
          <p>
            Picking up a new framework with a new design paradigm can be daunting. You 
            hear familiar names being tossed around (Components, Libraries, Objects), but 
            they're being used in new and mysterious ways. In this talk we'll cover what 
            some of these pieces are, how they're different, how to use them properly, and, 
            most importantly, how they fit together as pieces of a greater whole. Come see 
            why the Angular way of doing things is awesome (and easy).
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Develop Add-ons for Google Apps AND Stay Sane</h3>
          <p className="info">
            Google Apps Script
            <span>&bull;</span>
            Google Suite Add-ons
          </p>
          <p>
            With Google Apps Script, Google has provided a way for developers to add functional 
            to Google Suite apps. While using Google's in-browser editor to write sample Google 
            Add-ons can be handy for extremely basic scripts, it gets clunky fast when developers 
            want to do something like version control their code or have more than one person working 
            on a script. With the help of a couple open source projects, developers can now build Add-ons 
            on locally, on their own machines, with the tools they're most comfortable with.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Why Loop in Java When You Can Stream?</h3>
          <p className="info">
            Java
            <span>&bull;</span>
            Streams
          </p>
          <p>
            For years, the best tool for dealing with arrays was the for loop. But for loops get verbose 
            and can easily cause bugs. Lucky for us Java 8 introduced the Streams API. Using Streams can 
            shift your coding style from imperative to declarative—resulting in cleaner code that is easier 
            to write, read, and maintain. Come see how using Streams can take your Java to the next level.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Building Command-Line Applications with OAuth in Node</h3>
          <p className="info">
            JavaScript
            <span>&bull;</span>
            Node.js
            <span>&bull;</span>
            CLI
            <span>&bull;</span>
            OAuth
          </p>
          <p>
            Node provided a way to bring JavaScript out of the browser and on to server and desktop. In 
            addition to building web applications, now you can build command line interface applications 
            using JavaScript! Come explore some tools and libraries that will help you in your development, 
            and even learn how to complete an OAuth flow from the command line.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Always working on more...</h3>
          <p className="info">
            
          </p>
          <p>
            Let me know if you'd like me to come speak on other topics!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Talks;
