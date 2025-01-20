'use strict';

fetch('../data.json')
  .then(response => {
    return response.json();
  })

  .then(data => {
    let ave = 0;
    data.forEach(category => {
      ave += category.score;

      const row = document.createElement('tr');
      row.setAttribute('class', `category`);
      const header = document.createElement('th');

      header.setAttribute('class', `category__name`);
      header.style.backgroundImage = `url(${category.icon})`;
      header.style.backgroundRepeat = 'no-repeat';
      header.style.backgroundPosition = '12px 50%';
      header.innerText = `${category.category}`;

      const data = document.createElement('td');
      data.setAttribute('class', `category__score`);
      data.innerHTML = `<span>${category.score}</span>/100`;
      row.appendChild(header);
      row.appendChild(data);
      document.querySelector('table').appendChild(row);
    });
    document.getElementsByClassName('score__ave')[0].innerText = Math.trunc(
      ave / 4
    );
  })

  .catch(error => console.log(error));
