const body = document.querySelector('body');
const button = document.createElement("button");
button.innerText = "DOWNLOAD PAGE";
body.appendChild(button);


const createContent = (data) => {
    const div = document.createElement('div');
    const head = document.createElement('header');
    let str = [];
    for (const contentKey in data.main) {
        str.push(data.main[contentKey]);
    }

    for (const planets in data.planets) {

        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerHTML = data.planets[planets].title;
        p.innerHTML = data.planets[planets].info;
        div.appendChild(h2);
        div.appendChild(p);
        console.log(planets);
    }
    head.innerHTML = str.join(" ");

    body.appendChild(head);
    body.appendChild(div);

};
button.onclick = (event) => {
    event.preventDefault();
    button.hidden=true;
    fetch(
        'https://trevadim.github.io/vue/data/data.json'
    ).then((qq) => {
        console.log("qq", qq);
        return qq;
    }).then((data) => data.json())
        .then((result) => createContent(result))
        .catch((error) => console.log("error", error))
}



