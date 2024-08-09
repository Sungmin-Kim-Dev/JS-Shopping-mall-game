// Fetch the items from the JSON file
const loadItems = () => {
  return (
    fetch('data/data.json')
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((json) => json.items)
  );
};

const createElement = (item) => {
  const imgBox = document.createElement('div');
  imgBox.className = 'item-img';
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = `${item.color} ${item.type}`;
  imgBox.append(img);

  const itemText = document.createElement('div');
  itemText.className = 'item-text';
  itemText.innerHTML = `<span>${item.gender}, ${item.size} size</span>`;

  const li = document.createElement('li');
  li.className = 'item';
  li.dataset.type = item.type;
  li.dataset.color = item.color;
  li.append(imgBox, itemText);
  return li;
};

const onButtonClick = (event, elements) => {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (!key || !value) {
    return;
  }
  updateItems(elements, key, value);
};

const updateItems = (elements, key, value) => {
  elements.forEach((element) => {
    if (element.dataset[key] === value) {
      element.classList.remove('invisible');
    } else {
      element.classList.add('invisible');
    }
  });
};

const displayAll = (elements) => {
  elements.forEach((element) => {
    element.classList.remove('invisible');
  });
};

const setEventListeners = (elements) => {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.category');
  logo.addEventListener('click', () => displayAll(elements));
  buttons.addEventListener('click', (event) => onButtonClick(event, elements));
};

loadItems()
  .then((items) => {
    const elements = items.map(createElement);
    const container = document.querySelector('.item-list');
    container.append(...elements);
    setEventListeners(elements);
  })
  .catch(console.log);
