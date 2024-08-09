// Fetch the items from the JSON file
const loadItems = () => {
  return (
    fetch('data/data.json')
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((json) => json.items)
  );
};

const displayItems = (items) => {
  // console.log(items);
  let itemList = items.map((item) => createHTMLString(item)).join('');
  document.querySelector('.item-list').innerHTML = itemList;
  console.log('display items');
};

const createHTMLString = (item) => {
  return `
    <li class="item">
      <div class="item-img">
        <img src="${item.image}" alt="${item.type}">
      </div>
      <div class="item-text">
        <span>${item.gender}, ${item.size}</span>
      </div>
    </li>
    `;
};

// 필터를 누를 때마다 다시 그리기 때문에 비효율적
const onButtonClick = (event, items) => {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  if (!key || !value) {
    return;
  }
  const filteredList = items.filter((item) => item[key] == value);
  console.log(filteredList);
  displayItems(filteredList);
};

const setEventListeners = (items) => {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.category');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
};

loadItems()
  .then((items) => {
    // console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
