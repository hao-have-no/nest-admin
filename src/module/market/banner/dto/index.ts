import { IsString, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PagingDto } from 'src/common/dto/index';

export enum StatusEnum {
    STATIC = '0',
    DYNAMIC = '1',
  }

export enum TypeEnum {
    S = '0',
    D = '1',
    W = '2'
}

export enum PlatEnum{
    P = '0',
    W = '1',
    H = '2'
}

export enum PostEnum{
    T = 'top',
    I = 'index'
}


export class CreateBannerDto {
    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content?:string

    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    imgUrl?:string

    @IsOptional()
    @IsString()
    skipUrl?:string

    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    bannerType?:string

    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    platform?:string


    @IsOptional()
    @IsString()
    post?:string

    @IsOptional()
    @IsString()
    status?:string
}

export class UpdateBannerDto extends CreateBannerDto {
    @IsNumber()
    bannerId: number;
  }

export class listBannerDto extends PagingDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    imgUrl?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(TypeEnum)
    bannerType?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(PlatEnum)
    platform?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(PostEnum)
    post?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(StatusEnum)
    status?:string
}