import { BadRequestException, Injectable } from "@nestjs/common";
import ReturnResponse, { ReturnResponseType } from "./helper/returnResponse";
import { ReportResponseDto } from "./app.dto";


@Injectable()
export class AppService
{
  getAllIncomeReportes() :ReturnResponseType<ReportResponseDto[]>
  {
    const data = [{name:"Nasser",Date:new Date() ,id:"1"},{name:"Ali",Date:new Date(),id:"2"}]?.map((report)=>
    {
      return new ReportResponseDto(report)
    })
    return ReturnResponse(data)
  }

  getIncomeReportById(id:string) : ReturnResponseType<ReportResponseDto>
  {

    return ReturnResponse( new ReportResponseDto({name:"Nasser"}))
  }
  
  createReport(body:{name:string,id:string},res:any)
  {
    try
    { 
      return ReturnResponse(body,"","Report Created Successfully")
    }

    catch (e)
    {
      throw new BadRequestException(ReturnResponse({},"Error",""));
    }

  }

  updateReport(body:{name:string,id:string})
  {
    try
    { 
      return ReturnResponse(body,"","Report Updated Successfully")
    }

    catch
    {
      throw new BadRequestException(ReturnResponse({},"Error",""));
    } 
  }
}