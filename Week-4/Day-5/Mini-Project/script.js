const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

(function createRobotsCards() {
    robots.forEach((element) => {
        //creating the elements for the card
        const divCard = document.createElement("div");
        const imgRobot = document.createElement("img");
        const nameRobot = document.createElement("p");
        const emailRobot = document.createElement("a");
        imgRobot.src = element.image;
        const text = document.createTextNode(element.name);
        nameRobot.appendChild(text);
        emailRobot.href = element.email;
        emailRobot.textContent = element.email;
        divCard.append(imgRobot, nameRobot, emailRobot);
        imgRobot.setAttribute("id","imgRobot")
        divCard.setAttribute("id", element.id);
        divCard.classList.add("divCard");
        const section = document.querySelector("#cards");
        section.appendChild(divCard);
    })
})()

function search() {
    let idRobots = [];
    const robotsDivs = document.querySelectorAll("section>div");
    robotsDivs.forEach((element) => element.style.display = "none")
    const input = document.querySelector("input");
    robots.forEach((element) => {
        if (element.name.toLowerCase().startsWith(input.value.toLowerCase())) {
            idRobots.push(element.id);
        }
    })
    idRobots.forEach((id)=>{
        document.getElementById(id).style.display="block";
    })
    
}