// src/main.js
import '/public/src/styles.scss';

fetch('http://localhost:3000/api/message')
    .then((res) => res.json())
    .then((data) => console.log(data));
