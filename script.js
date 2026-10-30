const all = s => [...document.querySelectorAll(s)];
function showPanel(id) {
  all("article").forEach(a => a.hidden = a.id !== id);
  all(".item").forEach(b => b.classList.toggle("active", b.dataset.p === id));
}
function showLab(n) {
  all(".top").forEach(b => b.classList.toggle("active", b.dataset.lab === n));
  all(".side").forEach(s => s.hidden = s.dataset.lab !== n);
  showPanel(document.querySelector(`.side[data-lab="${n}"] .item`).dataset.p);
}
all(".top").forEach(b => b.onclick = () => showLab(b.dataset.lab));
all(".item").forEach(b => b.onclick = () => showPanel(b.dataset.p));
showLab("1");
