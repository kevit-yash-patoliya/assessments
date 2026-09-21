export default function customMiddleware (req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}