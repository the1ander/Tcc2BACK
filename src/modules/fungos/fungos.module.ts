import { Module } from "@nestjs/common";
import { FungosControler } from "./fungos.controller";
import { FungosService } from "./fungos.service";
import { PrismaService } from "src/database/PrismaService";

@Module({
    controllers:[FungosControler],
    providers: [FungosService, PrismaService]
})

export class FungosModule{}

