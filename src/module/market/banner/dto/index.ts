import { IsString, IsEnum, IsOptional, IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PagingDto } from 'src/common/dto/index';

export enum StatusEnum {
    STATIC = 0,
    DYNAMIC = 1,
  }

export enum typeEnum {
    S = 0,
    D = 1,
    W = 2
}

export enum platEnum{
    P = 0,
    W = 1,
    H = 2
}

export enum PostEnum{
    T = 'top',
    I = 'index'
}


export class CreateBannerDto {
    @ApiProperty({ required: true })
    @IsOptional()
    @IsNumber()
    title?: string;

    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    content?:string

    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    imgUrl?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    skipUrl?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(typeEnum)
    bannerType?:number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(platEnum)
    platform?:number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(PostEnum)
    post?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(StatusEnum)
    status?:string
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
    @IsEnum(typeEnum)
    bannerType?:number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(platEnum)
    platform?:number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(PostEnum)
    post?:string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(StatusEnum)
    status?:string
}