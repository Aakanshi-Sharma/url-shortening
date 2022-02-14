const toggler = document.querySelector(".toggler");
const section1 = document.querySelector(".section-1");
const shorten = document.querySelector(".shorten");
const input = document.querySelector(".input");
const apisection = document.querySelector(".apisection");
/////////////////////////////////////////////////////
//                 FUNCTIONS
/////////////////////////////////////////////////////
const toggle = function () {
  const html = `<div class="hi meow">
     <div class="ulCreate">Features</div>
     <div class="ulCreate">Pricing</div>
     <div class="ulCreate">Resources</div>
     <div class="ulCreate">Login</div>
     <div class="ulCreate">Sign Up</div>
     </div>`;
  section1.insertAdjacentHTML("beforeend", html);
  document.querySelector(".meow").classList.toggle("hi");
};

const short = async function () {
  const oldLink = input.value;
  const newLink = await shortening(oldLink);
  const createDiv = document.createElement("div");
  createDiv.classList.add("CreatedDiv");
  ////////////col1
  const col1 = document.createElement("div");
  col1.classList.add("createdcol1");
  col1.innerText = input.value;
  createDiv.appendChild(col1);
  ////////////col2
  const col2 = document.createElement("div");
  col2.classList.add("createdcol2");
  createDiv.appendChild(col2);
  ////////////link
  const link = document.createElement("div");
  link.classList.add("copiedLink");
  link.innerText = newLink;
  col2.appendChild(link);
  ////////////btn
  const copybtn = document.createElement("button");
  copybtn.classList.add("copy");
  copybtn.textContent = "Copy";
  col2.appendChild(copybtn);
  apisection.appendChild(createDiv);
  //clear input value
  input.value = "";
  //////////////////
  const copyall = document.querySelectorAll(".copy");
  copyall.forEach((x) => {
    x.addEventListener("click", function () {
      x.innerText = "Copied!";
      x.style.backgroundColor = "hsl(257, 27%, 26%)";
    });
  });
};

/////////////////////////////////////////////////////

const shortening = async function (url) {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await response.json();
  if (!data.ok) {
    alert(`${data.error}`);
    return "ERROR!";
  } else {
    return data.result.full_short_link;
  }
};

/////////////////////////////////////////////////////
//                  EVENT LISTENER
/////////////////////////////////////////////////////
toggler.addEventListener("click", toggle);
shorten.addEventListener("click", short);
