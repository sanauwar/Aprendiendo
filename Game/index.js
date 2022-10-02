let queue = [];
document.addEventListener('click', (event) => {
  const elem = event.target;
  if (!elem.classList.contains('tile')) {
    return false;
  }
  if (queue.includes(elem)) return false;

  elem.classList.add("active")
  queue.push(elem)
  if (queue.length >= 9) {
    const interval = setInterval(() => {
      let tile = queue.shift()
      //alert(tile.dataset.id)
      tile.classList.remove("active")
      if (queue.length === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
})