<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Avengers Character Serch</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="app.js"></script>
  </head>
  <body>
    
    <div class="conatiner">
    <h1>Avengers Character Search</h1>
    <div id="searchbox">
      <form action="#" method="get">
        <div class="form-field">
          <label for="search">Search by Full Name or Alies<em></em></label>
          <input type="text" id="search" name="search" placeholder="e.g. Captain America or Steve Rogers">
        </div> 
      </form> 
    <div class="interact">
      <button type="submit" name="searchBtn" class="btn" id = "Btn">Search</button>
    </div>
    </div>
    <div class = "lists">
      
      <?php include 'superheroes.php';?>
    </div>
  </div>
  <footer>
  <p class="text-muted">Copyright of Sudhish Sepaul &copy; <?= date('Y'); ?>, Form &amp; Co.</p>
  </footer>
  </body>

</html>