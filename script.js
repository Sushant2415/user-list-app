let loadButton = document.querySelector("#loadBtn");
let statusText = document.querySelector("#status");
let userList = document.querySelector("#userlist");

loadButton.addEventListener("click", async () => {
  statusText.innerText = "Loading...";
  userList.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network Error");
    }

    const users = await response.json();

    statusText.innerText = "";

    users.forEach((user) => {
      const li = document.createElement("li");

      li.innerHTML = `<strong>${user.name}</strong>
      <span>${user.email}</span>`;

      userList.appendChild(li);
    });
  } catch (error) {
    statusText.innerText = "Something went wrong❌";
  }
});
