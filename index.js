var a = document.createElement("div");
a.setAttribute("class", "column");
document.body.append(a);
//no need to input box to fetch different api because its an random api refresh to see different pictures.
//In this API random dogs photo can be fetch.
async function foo() {
    let dog = await fetch("https://dog.ceo/api/breed/borzoi/images/random");
    let dog1 = await dog.json();
    a.innerHTML = `<img src="${dog1.message}">`
    //  console.log(dog1);
}
foo();