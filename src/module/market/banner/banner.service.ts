import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { listBannerDto } from './dto';
import { BannerEntity } from './entities/banner.entity';
import { Repository } from 'typeorm';
import { ResultData } from 'src/common/utils/result';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(BannerEntity)
        private readonly bannerEntityRep: Repository<BannerEntity>
    ){}

  /**
   * 用户列表
   * @param query
   * @returns
   */

  async findAll(query:listBannerDto):Promise<any>{
    const entity = this.bannerEntityRep.createQueryBuilder('banner');
    console.log('----->',query)
    entity.where('banner.delFlag = :delFlag', { delFlag: '0' });
    if(query.title){
        entity.andWhere(`banner.title LIKE "%${query.title}%"`); 
    }
    if(query.bannerType){
        entity.andWhere('banner.bannerType = :bannerType', { bannerType: query.bannerType });
    }

    if(query.platform){
        entity.andWhere('banner.platform = :platform', { platform: query.platform });
    }

    if(query.status){
        entity.andWhere('banner.status = :status', { status: query.status });
    }

    if (query.params?.beginTime && query.params?.endTime) {
        entity.andWhere('banner.createTime BETWEEN :start AND :end', { start: query.params.beginTime, end: query.params.endTime });
      }


    entity.skip(query.pageSize * (query.pageNum - 1)).take(query.pageSize);
    const [list, total] = await entity.getManyAndCount();

    return ResultData.ok({
      list,
      total,
    });

  }
}
