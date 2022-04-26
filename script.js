const container = document.querySelector('#container');
const content = document.createElement('container');
content.classList.add('content');
content.textContent = 'this is glorius text-content';
container.appendChild(content);

// Create the <p> element and append it to the content DIV
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey, I'm red!";
content.appendChild(para);

// Create the <3> element and append it to the content DIV
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm blue h3";
content.appendChild(h3);

// Create the newDiv element and store it's variable as "newDiv"
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.border = 'solid black 1px';

// Create the <h1> element and append it to the newDiv
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

// Create the second <p> element and append it to the newDiv.
const newPara = document.createElement('p');
newPara.textContent = 'Me too!';
newDiv.append(newPara);

// finally we append the newDiv to the container
container.appendChild(newDiv);

// const content = document.createElement(c'div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);
