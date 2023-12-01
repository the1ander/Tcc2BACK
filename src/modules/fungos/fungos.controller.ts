import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { fungosDTO } from "./fungos.dto";
import { FungosService } from "./fungos.service";
import { get } from "http";

@Controller('fungos')
export class FungosControler{
    constructor(private readonly FungosService: FungosService){}
    @Post('cadastro')
    async create(@Body()data:fungosDTO){
        return this.FungosService.create(data);
    }
    @Get ('allfungos')
    async allfungos(){
        return this.FungosService.findall();
    }
    @Get ("findbyID/:id_fungo")
    async findbyID(@Param('id_fungo') id_fungo:string){
        return this.FungosService.findbyID(parseInt(id_fungo))
    }
}

