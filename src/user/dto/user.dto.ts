import { IsString, IsEnum } from "class-validator";
import { Role } from "../role.enum";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsEnum(Role)
    role: Role;
}