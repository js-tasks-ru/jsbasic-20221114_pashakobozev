function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  for (let i = 0; i < friends.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = friends[i].firstName + " " + friends[i].lastName;
    ul.append(li);
  }

  return ul;
  // ваш код...
}
