import express, { Request, Response, NextFunction } from "express";
import 'dotenv/config'
import routes from "../shared/infra/http/routes";
import rateLimiter from "../shared/infra/http/middlewares/rateLimiter";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import AppError from "../shared/errors/AppError";

const app = express();

app.use(rateLimiter);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());

app.use(routes);


app.use(Sentry.Handlers.errorHandler());

app.use((
  error:Error, 
  request:Request, 
  response:Response, 
  next:NextFunction)=>{
      if(error instanceof AppError){
          return response.status(error.statusCode).json({
              status: 'error',
              message: error.message,
          })
      }

      return response.status(500).json({
          status: 'error',
          message: ' Internal server error', 
      })
});

app.listen(8080, () => {
  console.log("Server starting on port 8080 🚀");
});
