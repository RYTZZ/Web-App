<?php
session_start();
require_once 'db.php';
require_once 'config.php';

// If already logged
if (isset($_SESSION['user_type'])) {
    if ($_SESSION['user_type'] === 'admin') header('Location: admin_dashboard.php');
    else header('Location: student_profile.php');
    exit;
}

$msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    $conn = db_connect();

    // try admin
    $stmt = $conn->prepare('SELECT id, password_hash FROM admins WHERE username = ? LIMIT 1');
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows === 1) {
        $stmt->bind_result($aid, $ahash);
        $stmt->fetch();
        if (password_verify($password, $ahash)) {
            $_SESSION['user_type'] = 'admin';
            $_SESSION['user_id'] = $aid;
            header('Location: admin_dashboard.php');
            exit;
        }
    }
    $stmt->close();

    // try student by student_id
    $stmt = $conn->prepare('SELECT id, password_hash, must_change_password FROM students WHERE student_id = ? LIMIT 1');
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows === 1) {
        $stmt->bind_result($sid, $shash, $must_change);
        $stmt->fetch();
        if (password_verify($password, $shash)) {
            $_SESSION['user_type'] = 'student';
            $_SESSION['user_id'] = $sid;
            if ($must_change) {
                header('Location: change_password.php');
                exit;
            } else {
                header('Location: student_profile.php');
                exit;
            }
        }
    }
    $stmt->close();

    $msg = 'Invalid credentials.';
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?php echo SITE_NAME; ?> — Login</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="container">
  <h1><?php echo SITE_NAME; ?></h1>
  <h2>Login</h2>
  <?php if ($msg) echo '<div class="alert">'.htmlspecialchars($msg).'</div>'; ?>
  <form method="post">
    <label>Student ID (students) or Admin username</label><br>
    <input type="text" name="username" required><br>
    <label>Password</label><br>
    <input type="password" name="password" required><br><br>
    <button type="submit">Login</button>
  </form>
  <p style="font-size:0.9em; margin-top:12px;">Students: default password = your <strong>Student ID</strong>. Change it after first login.</p>
</div>
</body>
</html>
