import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base';

@Entity('market_banner',{
    comment: 'banner广告位',
})

export class BannerEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int', 
        name: 'banner_id',
        comment: 'bannerId',
    })
    bannerId: number;

    @Column({
        type: 'varchar',
        length: 255,
        comment: '标题',
    })
    title:string

    @Column({
        type: 'varchar',
        length: 2000,
        comment: '详情',
    })
    content:string

    @Column({
        type: 'varchar',
        length: 255,
        name: 'img_url', 
        comment: '图片地址',
    })
    imgUrl: string;

    @Column({
        type: 'varchar',
        length: 255,
        name: 'skip_url', 
        comment: '跳转地址',
    })
    skipUrl: string

    @Column({
        type: 'varchar',
        name: 'banner_type',
        comment: '分类',
        default: '0' // 0 展示 1 跳转详情页 2 跳转外链
    })
    bannerType:string

    @Column({
        type: 'varchar',
        comment: '平台',
        default: '0' // 0 pc  1 weixin  2 h5
    })
    platform:string

    @Column({
        type: 'varchar',
        length: 30,
        comment:'位置' // index 首页
    })
    post:string
}