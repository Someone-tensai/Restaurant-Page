function on_initial_load()
{
    let content = document.querySelector("#content");

    let image = document.createElement("img");
    image.src = "./img/Restaurant.jpg";
    image.alt = "Restaurant Stock Picture";
    image.style.height ="300px";
    image.style.width = "500px";
    content.appendChild(image);

    let heading = document.createElement("h1");
    heading.textContent = 'Our Restaurant';
    content.appendChild(heading);

    let description = document.createElement("p");
    description.textContent = 'This is a W restaurant fr fr.'
    content.appendChild(description);
}
export default on_initial_load;