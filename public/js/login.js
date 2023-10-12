// async function submitForm(event) {
//    event.preventDefault();
//    const username = document.querySelector('.login-input[name="username"]').value;
//   const password = document.querySelector('.login-input[name="password"]').value;

//    const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//            'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     });

//     if (response.ok) {
//         alert('Login successful'); // You can replace this with any action you want
//         window.location.href = 'user.html';
//     } else {
//         alert('Invalid credentials');
//     }
// }

async function submitForm(event) {
    event.preventDefault();
    const username = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    console.log(username, password);

    const response = await fetch("https://swapi.dev/api/people/1");
    const movies = await response.json();
    const nameToEmail = movies.name.replace(/\s+/g, '').toLowerCase() + '@gmail.com';
    console.log(movies);
    console.log(nameToEmail);
    console.log(movies.birth_year)

    // checkUser(username, password);

    // console.log(checkUser(username, password));

    if (username === nameToEmail && password === movies.birth_year) { // lukeskywalker@gmail.com 19BBY
        alert('Login successful'); // You can replace this with any action you want
        window.location.href = 'user.html';
    } else {
        alert('Invalid credentials');
    }
}