let projects = [{
        title: "Example 1",
        img: "images\\mo-U3Kst7MY4Ok-unsplash.jpg",
        brief: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit aliquid earum quia cum aperiam in id illum, omnis ab sed doloremque iure. Tempora non itaque dolor laboriosam harum consequuntur maiores aut vitae,
        molestias nulla neque tempore voluptatibus officia culpa vero quaerat dicta nostrum molestiae commodi placeat voluptatem voluptas obcaecati?`,
    },
    {
        title: "Example 2",
        img: "images\\pan-yunbo-EgL0EtzL0Wc-unsplash.jpg",
        brief: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit aliquid earum quia cum aperiam in id illum, omnis ab sed doloremque iure. Tempora non itaque dolor laboriosam harum consequuntur maiores aut vitae,
        molestias nulla neque tempore voluptatibus officia culpa vero quaerat dicta nostrum molestiae commodi placeat voluptatem voluptas obcaecati?`,
    },
    {
        title: "Example 3",
        img: "images\\shubham-dhage-41j8o2REt68-unsplash.jpg",
        brief: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit aliquid earum quia cum aperiam in id illum, omnis ab sed doloremque iure. Tempora non itaque dolor laboriosam harum consequuntur maiores aut vitae,
        molestias nulla neque tempore voluptatibus officia culpa vero quaerat dicta nostrum molestiae commodi placeat voluptatem voluptas obcaecati?`,
    }
]

const createCards = (projects) => {
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

        content.appendChild(title);
        content.appendChild(body);
        content.appendChild(button);

        card.appendChild(content);

        cards.appendChild(card);
    }
}

createCards(projects)