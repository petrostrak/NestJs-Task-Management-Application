import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator<User>((data, ctx: ExecutionContext) =>{
    const req = ctx.switchToHttp().getRequest()
    return req.user
}) 