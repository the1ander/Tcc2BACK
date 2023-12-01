import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { fungosDTO } from "./fungos.dto";

@Injectable()
export class FungosService{
    constructor(private prisma: PrismaService){}

    async create(FungosData:fungosDTO){
        const newfungo = await this.prisma.fungos.create({
          data: {
            url_foto: FungosData.url_foto,
            filo: FungosData.filo,
            subfilo: FungosData.subfilo,
            classe: FungosData.classe,
            ordem: FungosData.ordem,
            familia: FungosData.familia,
            genero: FungosData.genero,
            basidioma: FungosData.basidioma,
            morfologia: FungosData.morfologia,
            habitat: FungosData.habitat,
            propriedades: FungosData.propriedades,
            observacoes: FungosData.observacoes,
          }  
        });
        return newfungo;
    }
    findall(){
        return this.prisma.fungos.findMany();
    }
    findbyID(id_fungo: number){
      return this.prisma.fungos.findUnique({
        where: {
          id_fungo: id_fungo
        }
      });
    }
}

