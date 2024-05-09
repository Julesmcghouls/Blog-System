const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Set uo middleware 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (reg, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// Start Server 
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

