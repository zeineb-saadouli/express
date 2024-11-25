const express = require('express');
const path = require('path');
const app = express();
 const workHoursMiddleware = ((req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if(day >= 1 && day <= 5 && hour >= 9 && hour < 17){
        next();
    }else{
        res.send("Ce site est inaccessible");
    }
 })
 app.use(workHoursMiddleware);
 app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
  });
  
  app.get('/services', (req, res) => {
    res.render('services', { pageTitle: 'Our Services' });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact Us' });
  });
  // création du serveur
  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
