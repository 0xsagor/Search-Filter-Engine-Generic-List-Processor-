const data = [
  { name: "Auth System", status: "active" },
  { name: "Dashboard UI", status: "active" },
  { name: "Expense Tracker", status: "archived" },
  { name: "Weather App", status: "active" },
  { name: "Notes App", status: "archived" }
];

function highlight(text, q) {
  if (!q) return text;
  const r = new RegExp(`(${q})`, "gi");
  return text.replace(r, "<mark>$1</mark>");
}

function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const f = document.getElementById("filter").value;
  const list = document.getElementById("list");

  list.innerHTML = "";

  data
    .filter(d =>
      (f === "all" || d.status === f) &&
      d.name.toLowerCase().includes(q)
    )
    .forEach(d => {
      list.innerHTML += `
        <li>
          ${highlight(d.name, q)}
          <small>(${d.status})</small>
        </li>
      `;
    });
}

render();
