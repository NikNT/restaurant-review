const express = require('express'); 
const app = express(); 
const path = require('path');

const PORT = process.env.PORT || 3000; 

app.use(express.static('public')); 


// app.get('/index.html', (req, res) => {
//     res.sendFile(path.resolve((__dirname) + '/public/index.html'));
// });

// app.get('/reviews.html', (req, res) => {
//     res.sendFile(path.resolve((__dirname) + '/public/reviews.html'));
// });

app.listen(PORT, ()=>{
    console.log(`Website Running on Server: ${PORT}`); 
});