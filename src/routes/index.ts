import express from 'express';
const router = express.Router();


router.use('/mutant', require('@apiServices/mutantes'));

module.exports = router;
