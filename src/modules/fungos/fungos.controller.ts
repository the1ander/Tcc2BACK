import { Body, Controller, Get, Post } from "@nestjs/common";
import { fungosDTO } from "./fungos.dto";
import { FungosService } from "./fungos.service";

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
}

