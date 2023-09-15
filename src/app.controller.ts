import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";
import ReturnResponse, { ReturnResponseType } from "./helper/returnResponse";
import { Http2ServerResponse } from "http2";
import { AppService } from "./app.service";
import { CreateReprotDto, ReportResponseDto, UpdateReportDto } from "./app.dto";


@Controller("/reporter/income")
export class AppController
{
  constructor(
    private readonly reportService:AppService
  ){}

  @Get()
  getAllIncomeReportes():ReturnResponseType<ReportResponseDto[]>
  {
    return this.reportService?.getAllIncomeReportes()
  }

  @Get(":id")
  getIncomeReportById(@Param('id') id:string)
  {
    return this.reportService?.getIncomeReportById(id)
  }

  @Post('addReport')
  createReport(@Body() body:CreateReprotDto, res:Response)
  {
    return this.reportService?.createReport(body,res)
  }

  @Put()
  updateReport(@Body() body:UpdateReportDto)
  {
    return this.reportService?.updateReport(body)
  }

}