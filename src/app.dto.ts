import { Exclude, Expose } from "class-transformer"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateReprotDto
{
    @IsString()
    @IsNotEmpty()
    name:string
    @IsString()
    @IsNotEmpty()
    id:string
}

export class UpdateReportDto
{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name:string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    id:string
}

export class ReportResponseDto
{
    name:string
    @Exclude()
    Date:Date
    @Expose({name:"Date"})
    returnNewDate()
    {
        return this?.Date;
    }
    
    @Exclude()
    id:string

    constructor(partial: Partial<ReportResponseDto>)
    {
        Object?.assign(this,partial)
    }
}