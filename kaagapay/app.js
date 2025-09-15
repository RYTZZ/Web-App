document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  let res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  let result = await res.json();
  if (result.success) {
    window.location.href = result.role === "admin" ? "admin.html" : "dashboard.html";
  } else {
    alert("Login failed");
  }
});