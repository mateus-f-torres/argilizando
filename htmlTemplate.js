function template(reactDOM){
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="description" content="react_redux_template">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link id="favicon" rel="icon" href="#" type="image/x-icon">
  <link rel="stylesheet" href="styles.css">
  <title>Universal App</title>
</head>
<body>

  <div id="root">${reactDOM}</div>
  
  <script src="./bundle.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
</body>
</html>
`;}

module.exports = template;
