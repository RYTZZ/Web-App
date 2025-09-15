<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to KAAGAPAY NSTP VOLUNTEERS BULAN CAMPUS</title>

  <!-- ✅ Import Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- ✅ Your custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <img src="2.png" alt="KAAGAPAY LOGO" class="logo">
    <h1>Welcome to KAAGAPAY NSTP VOLUNTEERS BULAN CAMPUS</h1>
    <form id="loginForm">
      <input type="text" name="username" placeholder="Student ID" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <a href="forgot.html">Forgot Password?</a>
  </div>

  <!-- ✅ JavaScript -->
  <script src="app.js"></script>
</body>
<form action="login.php" method="POST">
  <input type="text" name="username" placeholder="Student ID" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>

</html>
