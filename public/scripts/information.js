/**
 * Insert information into document from JSON for:
 *  - Projects
 *  - Experiences
 */


let projects = [{
        title: "IVR Config Manager",
        img: "images/projects/ivrwav.gif",
        brief: `Worked on this project at my internship at Community Software Group. This project made a web interface for administrators to access and update sound files and other configurations options for their IVR (automatic phone system). This project is very important because there are way too many agencies for developers to manually update the files and agency administrators for a lack of knowledge and security reasons can't modify the files on the server themselves.`,
        tags: ['.NETCore', 'JS', "Angular", "AWS", "IIS"],
        href: 'https://drive.google.com/file/d/1WGJzvaV9AF5KyxnRGR5_Yuo9MZ_gfjan/view?usp=sharing'
    },
    {
        title: "ETL Tool (Data Processing)",
        img: "images/projects/etl.gif",
        brief: `This is another project that I worked on at Community Software Group (CSG) aiming to solve the issue of standardizing the process of importing data into Engage, a system at CSG. The system before this project is following a 30 page PDF to create a CSV by hand, which obviously isn't the best idea.

    We made this tool to convert an excel sheet of data into a data table on the backend with the original data being transformed into a format that works while all the user has to do is label the original column in our web app.
    
    This project is necessary because each of our clients use different software that exports the data in a different format, so having an easy to use website that works for all excel files is crucial.`,
        tags: ['.NETCore', 'JS', "Angular", "Python", "Flask", "Docker", "Redis", "IIS"],
        href: "https://drive.google.com/file/d/1cNm4Ik95LJ7QKNePe7lxyXGil4t-6TiJ/view?usp=sharing"
    },
    {
        title: "Desktop Pet",
        img: "images/projects/horse.png",
        brief: `Bored at looking at your desktop or miss your pet school? Then this project is for you! This is a python project that makes an interactable desktop pet that has its own animations. Pets are customizable, can have arbitrary amounts of animations, and can easily be added by editing a config file. When run, the pets will cycle animations, move around the sreen by themselves, or be moved by the user's mouse.`,
        tags: ['Python', 'TKinter'],
        href: "https://github.com/ALearningCurve/desktop-pet"
    },
    {
        title: "Langauge Learning NLP",
        img: "images/projects/nlpp.png",
        brief: `This is a project I did to enhance the reading and learning experience for students learning other languages. By adopting a format similar to google classroom, students can easily join online classrooms (called groups) and which teachers can easily moderate and control. The groups allow teachers to assign readings which students can interact with, such as by double clicking a word, to get a synonym of that word in the target foreign language and a translation after another successive click. The program will keep track of the students' clicks and allow the teacher to see what words they might need to spend more time on with the class. With built in image, pdf, and word document text extraction 
    (nlp) the program strives to be as user friendly for teachers to upload resources
    
    This site also makes us of authentication logic and databases. The site utilizes required log in checks for most pages, a hashing algorithm, cross-site scripting protection by escaping HTML, form validation to ensure that data is properly entered, and checks user against the owner of a post or group to prevent malicious actions.
    
    Overall I am super proud of this project and hope to make this project a real thing in the future!`,
        tags: ['Python', 'Django', 'JS'],
        href: "https://github.com/ALearningCurve/NLPP"
    },
    {
        title: "Design Chef",
        img: "images/projects/chef.png",
        brief: `Tired of writing out the long, repetitive, and boring design recipes for FUNDIES 1? Automate Racket (BSL, ISL, etc) design recipes using this website. This tool was especially made to speed up the creation of enumerables and other datatypes that are a pain in the butt to type out by hand!`,
        tags: ['Python', 'Flask', 'JS'],
        href: "https://github.com/ALearningCurve/DesignRecipeChef"
    },
    {
        title: "Raspberry Pi Garage Door Status",
        img: "images/projects/gdoor.png",
        brief: `When I leave the house, I have a bad habit of leaving the garage door open, which is like worrying if I left the oven on for me. So, I created a React website using tailwind to display the status of my garage doors. Using a raspberry pi with motion sensors and firebase (with authentication) I was able to get live, secure updates about my garage door on this website.`,
        tags: ['Python', 'Flask', 'JS', 'React', 'Firebase', 'Raspberry Pi/Sensor Boards'],
        href: "https://github.com/ALearningCurve/DesignRecipeChef"
    },
    {
        title: "Prototyping With Figma",
        img: "images/projects/prototypecs1200.gif",
        brief: `Made an interactive prototype with Figma. Although this is not a coding project, I am very proud of the final result of this Figma prototype.`,
        tags: ['Figma'],
        href: "https://www.figma.com/proto/15gyEcIYIwN9CMKD6SqDPm/CS1200Prototype?node-id=2191%3A8136"
    },
    {
        title: "Design Chef",
        img: "images/projects/chef.png",
        brief: `Tired of writing out the long, repetitive, and boring design recipes for FUNDIES 1? Automate Racket (BSL, ISL, etc) design recipes using this website. This tool was especially made to speed up the creation of enumerables and other datatypes that are a pain in the butt to type out by hand!`,
        tags: ['Python', 'Flask', 'JS'],
        href: "https://github.com/ALearningCurve/DesignRecipeChef"
    },
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
        date: '<svg style="width: 1em; height: auto;" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Infinite</title><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48"/></svg>',
        org: "Personal Projects",
        position: "Enthusiest",
        description: `
    I've worked on and still am making dozens of projects independently, check them out on the projects tab!
    `
    },
    {
        date: '<svg style="width: 1em; height: auto;" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Infinite</title><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48"/></svg>',
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

/**
 * Creates cards in the projects section based on the passed json
 * @param projects: The list of project objects to create cards for
 */
const createCards = (projects) => {

    const cards = document.getElementById("main-card-grid");

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let card = document.createElement('div');
        card.classList.add("card");

        if (i > 3) {
            card.classList.add("toggle", "toggle-cards");
        }

        card.style = `background-image: url(${project.img});`
        card.setAttribute("data-inviewport", "item-anim-in")
        let content = document.createElement('div');
        content.className = "card-content";

        let title = document.createElement('h4');
        title.className = "card-title";
        title.innerText = project.title;

        let body = document.createElement('p');
        body.className = "card-body";
        body.innerText = project.brief

        let button = document.createElement('a');
        button.innerText = "Learn More"
        button.classList.add("btn", "btn-outline-green", "huge")
        button.onclick = () => {
            createProjectModal(project);
        }

        content.appendChild(title);
        content.appendChild(body);
        content.appendChild(button);

        card.appendChild(content);

        cards.appendChild(card);
    }

    if (projects.length > 4) {
        let btn = document.createElement('button');
        btn.classList.add("btn", "btn-outline-green", "huge");
        btn.innerHTML = `<span id="proj-btn-action-word">Show </span>(${projects.length - 4}) Additional Projects`;
        btn.id = "show-project-cards";
        btn.style = "margin-top: 4em; margin-bottom: 4em";

        const section = document.getElementById("projects-section");
        section.appendChild(btn)


    }
}

/**
 * creates nodes for each of the given experiences
 * @param experiences: The list of experiences objects to create node in the steamleafplot for
 */
const createExperiences = (experiences) => {

    const nodes = document.getElementById("experience-nodes");

    for (let i = 0; i < experiences.length; i++) {
        let experience = experiences[i];

        let node = document.createElement('div');
        node.classList.add("node");
        node.setAttribute("data-inviewport", "item-anim-in-rise-in")

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

/**
 * TODO: Implement modals
 * @param {*} project 
 */
const createProjectModal = (project) => {
    open(project.href, "_blank")
}





/**
 * Creates elements in the page for experiences and project sections
 * @returns if setup was complete
 */
export const insertInformation = () => {
    // Run the customizations
    createCards(projects)
    createExperiences(experiences)

    return true;
}