let user = [
  "thembi 30",
   "selina 28",
   "wandile 40",
   "happy 20",
   "kagiso 21",
   "nkosiphendule 35",
   "mmapaseka 35",
   "hardy 55",
   "khumbulani 22",
   "charity 44",
   "pericous 35",
   "sithembiso 33",
   "mdudzi 55",
   "Sipho 34",
   "Andisiwe 29",
];

let display = document.getElementById("display");

for (let i = 0; i < user.length; i++) {
  display.innerHTML += "<p>" + user[i] + "</p>";
}

