/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as redis from "redis";
import { Request, Response, NextFunction } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";

const redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    sessionTimeout: 20,
  },
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 10, // 10 requests
  duration: 5, // per 1 second by IP
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    // await redisClient.connect();
    console.log("request.ip", request.ip);
    await limiter.consume(request.ip);
    return next();
  } catch (error) {
    response.status(429).json({ message: (error as Error).message });
    // response.status(429).json({
    //   message: "You have exceeded the 10 request in 5 seconds limit!",
    // });

    // throw new Error((error as Error).message);
  }
}
