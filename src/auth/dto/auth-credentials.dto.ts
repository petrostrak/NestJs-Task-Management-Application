import { IsString, MinLength, MaxLength, Matches } from "class-validator"

export class AuthCredentialsDto {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, { message: 'Password to weak' })
    password: string
}

/*
    (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    (?=.*[0-9])	The string must contain at least 1 numeric character
    (?=.*[!@#$%^&*]) The string must contain at least one special character
*/