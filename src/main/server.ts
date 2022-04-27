import express from "express";
import 'dotenv/config'
import routes from "../shared/infra/http/routes";
import rateLimiter from "../shared/infra/http/middlewares/rateLimiter";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

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
app.use(express.json());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(routes);
app.use(Sentry.Handlers.errorHandler());

app.listen(8080, () => {
  console.log("Server starting on port 8080 🚀");
});
