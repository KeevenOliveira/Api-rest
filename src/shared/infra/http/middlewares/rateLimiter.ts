/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from "redis";
import { Request, Response, NextFunction } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";


export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  const redisClient = createClient({
    legacyMode: true,
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  await redisClient.connect();
    
  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 5, // 10 requests
    duration: 5, // per 1 second by IP
  });

  try {
    await limiter.consume(request.ip);
    return next();
  } catch (AppError) {
   return response.status(429).json({
      message: "You have exceeded the 10 request in 5 seconds limit!",
    });
  }
}
