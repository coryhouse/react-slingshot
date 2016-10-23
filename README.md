# Why is this fork here?

This is a fork of Cory House's [React Slingshot](https://github.com/coryhouse/react-slingshot) project.  The original README that accompanied that project is [here](docs/README.md).  
I am working on a proof of concept for my current employer, and my plan is that the latter project in turn will be a private fork of this project.  I thought that by way of contributing something back, meantime, that it might be a good idea to do this intermediate step, consisting of the still-MIT-licensed, non-proprietary "gist" of our application.

## What We'll Be Working On
Here are some of the things our app will need to add that I'll be adding here first into this project:

* MongoDB (Proably via Mongoose).
* While we're connecting to databases in production and the test build, we'll want to store connection data (for production, at least) outside of the configuration itself, e.g. in the environment.  So we'll demonstrate how that might be done here.  We'll also add an intermediate QA
configuration.
* We'll decide on how we'll do business rules.
* We'll make decisions about whether we need to break any of this down into sub-projects.  I would 
argue that given the small size of the team, it might be overkill, but we might consider serving static files (including our production front end build) from Apache or Nginx.
* Logging.

For our particular project needs, one thing we need are a set of moderately complex business rules around a single core object (which may of course be composed of sub-objects).  One of the benefits of a full stack JavaScript "Write Once - Run Anywhere" deployment (yeah, I went there, sorry) is that we can run validations and business rules on the client side and the server.  So we'll make a decision about how best to do that, which may boil down to either nools rules or VanillaJS (perhaps plus ajv) -- though there are other alternatives out there we might explore.

Our goal is that -- for applications that resemble ours in some respects -- this fork will be an approriate starting point.