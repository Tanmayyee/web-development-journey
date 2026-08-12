import express from 'express';
import morgan from 'morgan';

const app = express();

// Runs for EVERY incoming request because no specific path is given
app.use(morgan('dev'));

// Runs for EVERY incoming request
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);

    // next() passes control to the next middleware/route
    next();
});

// Runs only for requests whose path starts with /dogs
app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!");

    // next() allows the next middleware/route to run
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;

    if (password === 'chickennugget') {
        // Correct password → move to the next middleware/route
        next();
    } else {
        // Sends the response → request stops here
        // next() is NOT called, so the next route won't run
        res.send("YOU NEED A PASSWORD!");
    }
};

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);

    // Sends the response and ends the request-response cycle
    res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);

    // Sends the response and ends the request-response cycle
    res.send('WOOF WOOF!');
});

// verifyPassword runs BEFORE the route handler
app.get('/secret', verifyPassword, (req, res) => {
    // This runs only if verifyPassword calls next()
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone');
});

// 404 middleware
// Runs when NO previous route/middleware sends a response
app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
});

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});