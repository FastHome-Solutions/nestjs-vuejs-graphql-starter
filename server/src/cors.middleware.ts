import { Injectable, NestMiddleware } from "@nestjs/common";
import { MiddlewareFunction } from "@nestjs/common/interfaces/middleware";

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    resolve(): MiddlewareFunction {
        return (req, res, next) => {
            let allowedOrigins = ["http://localhost:8880", "https://app.tef-insights.de"];
            if (allowedOrigins.indexOf(req.header("Origin")) > -1) {
                res.header("Access-Control-Allow-Origin", req.header("Origin"));
                res.header("Access-Control-Allow-Headers", "content-type");
                res.header("Access-Control-Allow-Methods", "POST");
            }

            next();
        };
    }
}
