# Hazard Reporting System

## Description

This is a Hazard reporting system which will use SMS from the distressed to report an incident. 
The distressed person will send an SMS to a short-code/long-code number provided by the Cellphone network
provider. That SMS data will be transmitted to the Reporting server with geo-location info of the distressed person.
Then the incident will be reported to the volunteers who are part of the rescue team.<br/>

This system will be able to track live location of the volunteers via SMS consent provided by them.
From operators like Grameenphone / Robi / Banglalink geo-location info of volunteers is will be fetched.
Telematics data will include nearest BTS location. Analyzing the BTS locations of the volunteer and the distressed,
the system will try to connect the volunteer with the distressed people so that the resque 
mission can be carried out effectively. <br/>

### System components

There are three main components of this system-

- Volunteer database
- Volunteer info management portal
- Live Dashboard for Incident monitoring
- Back-end APIs for incident data and volunteer info integration
- Background processes for automated volunteer-distress party matching

![Architecture Roadmap](https://github.com/skfarhad/hazard_reporting_system/blob/main/architecture_roadmap.jpg)

The live dashboard will provide a birds-eye-view of the whole scenario
of the incidents reported and the rescue mission status.
Here is sample view of the live dashboard-

![Live Dashboard](https://github.com/skfarhad/hazard_reporting_system/blob/main/live_dashboard.jpeg)


### Tech Stack

Initial implementation for Back-End we are using 
[Python version 3.8](https://www.python.org/downloads/release/python-380/). 
The chosen back-end framework is [Django](https://www.djangoproject.com/). For background
processes, we are using [Celery](https://docs.celeryq.dev/). 
For live dashboard, [Next.js](https://nextjs.org/) is the frameworks being adopted initially. 
[PostgreSQL](https://www.postgresql.org/) is the database of choice for backend.
Docker and Kubernetes will be integrated as well.

![Tech stack](https://github.com/skfarhad/hazard_reporting_system/blob/main/HMS_tech_stack.jpg)

## If you want to contribute

Any contribution would be highly appreciated. Kindly go through the 
[guidelines for contributing](CONTRIBUTING.md).