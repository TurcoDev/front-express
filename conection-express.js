


// fetch('https://randomuser.me/api/?results=10')
//   .then(response => response.json())
//   .then(data => console.log(data));

fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const userList = document.getElementById('user-list');
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.username} ${user.role}`;
      userList.appendChild(li);
    });
  });