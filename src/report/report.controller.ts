import { Body, Controller, Get, Param,Post, Put, } from "@nestjs/common";
import { ReturnResponseType } from "src/helper/returnResponse";
import { ReportService } from "./report.service";
import { CreateReprotDto, ReportResponseDto, UpdateReportDto } from "src/app.dto";


@Controller("/reporter/:type")
export class ReportController
{
  constructor(
    private readonly reportService:ReportService
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