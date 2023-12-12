import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './entity/Product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("product")
  getAllProducts(
    //declara por default si no viene datos y toma automatico como numero
    @Query("limit") limit = 100, 
    //indicar tipo de variable
    @Query("offset") offset: number
    ) {
    return `products: limit: ${limit} &offset: ${offset}`;
  }

  @Get("nuevo/:id")
  newEndPoint(@Param(`id`) id: string) {
    return `nuevo endpoint ${id}`;
  }


  @Get("nuevo/:id/products/:productId")
  getCategory(@Param(`id`) id: string, @Param(`productId`) productId: string) {
    return `nuevo endpoint ${id} , product: ${productId}`;
  }

  @Post("product")
  createProduct(@Body("product") product: Product){
    return `creando producto ${product}`;
  }

  @Put("product/:id")
  updateProduct(@Param("id")id:number ,@Body() product: any){
    return `editando producto ${product.product} con id: ${id}`;
  }


}
