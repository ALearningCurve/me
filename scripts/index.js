let projects = [{
        title: "IVR Config Manager",
        img: "images\\mo-U3Kst7MY4Ok-unsplash.jpg",
        brief: `Worked on this project at my internship at Community Software Group. This project made a web interface for administrators to access and update sound files and other configurations options for their IVR (automatic phone system). This project is very important because there are way too many agencies for developers to manually update the files and agency administrators for a lack of knowledge and security reasons can't modify the files on the server themselves.`,
        tags: ['angular']
    },
    {
        title: "ETL Tool (Data Processing)",
        img: "images\\pan-yunbo-EgL0EtzL0Wc-unsplash.jpg",
        brief: `This is another project that I worked on at Community Software Group (CSG) aiming to solve the issue of standardizing the process of importing data into Engage, a system at CSG. The system before this project is following a 30 page PDF to create a CSV by hand, which obviously isn't the best idea.

        We made this tool to convert an excel sheet of data into a data table on the backend with the original data being transformed into a format that works while all the user has to do is label the original column in our web app.
        
        This project is necessary because each of our clients use different software that exports the data in a different format, so having an easy to use website that works for all excel files is crucial.`,
    },
    {
        title: "Desktop Pet",
        img: "images\\shubham-dhage-41j8o2REt68-unsplash.jpg",
        brief: `Bored at looking at your desktop or miss your pet school? Then this project is for you! This is a python project that makes an interactable desktop pet that has its own animations. Pets are customizable, can have arbitrary amounts of animations, and can easily be added by editing a config file. When run, the pets will cycle animations, move around the sreen by themselves, or be moved by the user's mouse.`,
    }
]

let experiences = [{
        date: '2020-2021',
        org: "Community Software Group (CSG)",
        position: "Full Stack Intern",
        description: `
        <li>Performed front-end development, API development, data science, containerization, testing automation, cloud services and deployment automation as part of an international team</li>
        <li>Developed an automation tool used in an IVR to make government fuel assistance programs more accessible utilizing AWS, ASP.NETCore, SQL, and Angular </li>
        <li>Solved a data quality issue by reformatting data using asynchronous python jobs run with Celery and RabbitMQ in a docker container accessed through an Angular frontend and flask backend</li>
        `
    },
    {
        date: '2021-Present',
        org: "SEDS Mars Rover Challenge",
        position: "Software Developer",
        description: `
        <li>Created a rover able to autonomously navigate, relay diagnostics to a react app, and use its mechanical arm </li>
        <li>Developed firmware in C++ to communicate sensor data with other systems and python code leveraging ROS</li>
        <li>Directed a sub team to resolve sensor issues</li>
        `
    },
    {
        date: '<div style="font-size: 3em; font-weight:100; position: relative; top: .5em;">∞</div>',
        org: "Personal Projects",
        position: "Enthusiest",
        description: `
        I've worked on and still am making dozens of projects independently, check them out on the projects tab!
        `
    },
    {
        date: '<div style="font-size: 3em; font-weight:100; position: relative; top: .5em;">∞</div>',
        org: "Relevant Accrediations and Awards",
        position: "(woah shiny!)",
        description: `
        <li>2020
            <ul>
                <li> Python and Django Full Stack Web Developer Bootcamp (via Udemy)
                <li> Seal of Biliteracy with Distinction in Spanish</li>
            </ul>
        </li>
        <li>2021 
            <ul>
                <li>Made Dean's list at Northeastern's Khoury College of Computer Sciences</li>
            </ul>
        </li>
        `
    }
]

const createCards = (projects) => {
    /**
     * @param projects: The list of project objects to create cards for
     */
    const cards = document.getElementById("main-card-grid");

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let card = document.createElement('div');
        card.className = "card";

        let content = document.createElement('div');
        content.className = "card-content";

        let title = document.createElement('h4');
        title.className = "card-title";
        title.innerText = project.title;

        let body = document.createElement('p');
        body.className = "card-body";
        body.innerText = project.brief

        let button = document.createElement('a');
        button.className = "button";
        button.innerText = "Learn More"
        button.onclick = () => {
            createProjectModal(project);
        }

        content.appendChild(title);
        content.appendChild(body);
        content.appendChild(button);

        card.appendChild(content);

        cards.appendChild(card);
    }
}

const createExperiences = (experiences) => {
    /**
     * @param experiences: The list of experiences objects to create node in the steamleafplot for
     */

    const nodes = document.getElementById("experience-nodes");

    for (let i = 0; i < experiences.length; i++) {
        let experience = experiences[i];

        let node = document.createElement('div');
        node.className = "node";

        let body = document.createElement('div');
        body.className = "node-body";

        let date = document.createElement('div');
        date.className = "date";
        date.innerHTML = experience.date;

        let org = document.createElement('div');
        org.className = "org";
        org.innerText = experience.org;

        let pos = document.createElement('div');
        pos.className = "position";
        pos.innerText = experience.position;

        let desc = document.createElement('div');
        desc.className = "description";
        let list = document.createElement('ul');
        list.innerHTML = experience.description;
        desc.appendChild(list);

        body.appendChild(date);
        body.appendChild(org);
        body.appendChild(pos);
        body.appendChild(desc);


        node.appendChild(body);

        nodes.appendChild(node);
    }
}

const createProjectModal = (project) => {
    console.log(project)
}



// Run the customizations
createCards(projects)
createExperiences(experiences)