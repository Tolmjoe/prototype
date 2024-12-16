<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style><?php include "style.css" ?></style>
    <title>Sign In</title>
</head>
<body class="fb" >

 <div class="formbody2">
    <form class="signinform" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <div class="si">
            <label for="em">Email</label>
            <input type="email" name="" id="em">
        </div>
        <div class="si">
            <label for="pwd">Password</label>
            <input type="password" name="" id="pwd">
        </div>
        <div class="housebut"><button class="signinbutton" type="submit"><b>Sign in</b></button></div>

    </form>
 </div>  






</body>
</html>