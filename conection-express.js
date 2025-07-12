


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



document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const role = document.getElementById('userRole').value;
  const date = document.getElementById('date').value;

  const newUser = {
    username: username,
    role: role,
    created_at: date
  };

  console.log('Nuevo usuario:', newUser);
  

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Usuario agregado:', data);
  })
  .catch(error => {
    console.error('Error al agregar usuario:', error);
  });
});

  