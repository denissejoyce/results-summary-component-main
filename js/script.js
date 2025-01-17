'use strict';

fetch('../data.json')
  .then(response => {
    return response.json();
  })

  .then(data => {
    let ave = 0;
    data.forEach(category => {
      ave += category.score;
      console.log(ave);

      const row = document.createElement('tr');
      row.setAttribute('class', `category`);
      const header = document.createElement('th');
      const name = document.createElement('p');
      name.setAttribute('class', `category__name`);
      name.innerText = `${category.category}`;

      const icon = document.createElement('img');
      icon.setAttribute('src', `${category.icon}`);
      icon.setAttribute('class', `category__icon`);

      const data = document.createElement('td');
      data.innerHTML = `<span class="category__score">${category.score}</span>/100`;

      header.appendChild(icon);
      header.appendChild(name);
      row.appendChild(header);
      row.appendChild(data);
      document.querySelector('table').appendChild(row);
    });
    document.getElementsByClassName('score__ave')[0].innerText = Math.trunc(
      ave / 4
    );
  })

  .catch(error => console.log(error));
