const getCookies = async() => {
    const url = "https://lmmurphy0808.github.io/json/cookies.js";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showCookies = async() => {
    const cookies = await getCookies();
    const cookieRecipes = document.getElementById("recipes");

    cookies.forEach((cookie)=>{
        const section = document.createElement("section");
        cookieRecipes.append(section);
        const h3 = document.createElement("h3");
        h3.innerHTML = cookie.name;
        section.append(h3);

        /*const r = document.createElement("r");
        section.append(r);
        r.innerHTML = ''*/

        const ul = document.createElement("ul");
        section.append(ul);

        cookie.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.append(review);
            ul.append(li);
        });
    });
};

showCookies();