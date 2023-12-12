import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return `This action adds a new product: ${createProductDto.name}  , ${createProductDto.description} ${createProductDto.price} ${createProductDto.stock}`;
  }

  findAll() {
    throw new HttpException('Error no se encontro', HttpStatus.BAD_REQUEST);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
