import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index'
import AppError from '@shared/errors/AppError';

const PORT = 3000

const app = express();

app.use(cors());
app.use(express.json())

app.use(routes)

app.use((
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
  ) => {
    if (error instanceof AppError) {
      return response
      .status(error.statusCode)
      .json({
        status: 'error',
        message: error.message
      })
    }

    return response
    .status(500)
    .json({
      status: 'error',
      message: 'Internal server error.'
    })

})

app.listen(PORT, () =>{
  console.log(`Server running at port ${PORT}`)
})
