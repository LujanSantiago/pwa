const container = document.querySelector(".container");
const coffees = [
  {
    
    image: "images/imagen.jpg"
  } 
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                
                
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
