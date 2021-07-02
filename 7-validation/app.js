import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name').trim().isLength({ min: 2 }).withMessage('Please enter more than 2 letters!'),
    body('age').isInt().withMessage('Please enter numbers'),
    body('email').isEmail().withMessage('please enter email').normalizeEmail(),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').isEmail().withMessage('please enter email'), validate],
  (req, res, next) => {
    res.send('💌');
  }
);

app.listen(8080);
