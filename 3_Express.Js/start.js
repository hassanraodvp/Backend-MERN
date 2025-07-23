const express = require('express');
const app = express();

//! Middleware
// jab bhi server request accept lrta hai waha se route kay beech ponchny tak ager ap us request ko beech mai rok lety ho, or kuch perform krty ho to yai element middleware kahlata hai in some cases.

// One way of writing middleware
app.use((req, res, next) => {
  console.log('This is middleware');
  next();
});
app.use((req, res, next) => {
  console.log('This is another middleware');
  next();
})

app.get('/profile', (req, res, next) => {
  return next(new Error('Error'));
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
});

//! Server listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

