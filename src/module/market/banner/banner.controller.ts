import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BannerService } from './banner.service';
import { listBannerDto, CreateBannerDto, UpdateBannerDto } from './dto';
import { RequirePermission } from 'src/common/decorators/require-premission.decorator';

@ApiTags('banner管理')
@Controller('market/banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @ApiOperation({ summary: '营销管理-banner创建' })
  @ApiBody({ type: CreateBannerDto })
  @RequirePermission('system:banner:add')
  @Post()
  create(@Body() createConfigDto: CreateBannerDto) {
    return this.bannerService.create(createConfigDto);
  }

  @ApiOperation({ summary: '营销管理-banner列表' })
  @RequirePermission('system:banner:query')
  @Get('/list')
  findAll(@Query() query: listBannerDto) {
    return this.bannerService.findAll(query);
  }

  @ApiOperation({
    summary: '营销管理-banner详情',
  })
  @RequirePermission('system:banner:query')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(+id);
  }

  @ApiOperation({
    summary: '营销管理-banne更新',
  })
  @RequirePermission('system:banner:edit')
  @Put()
  update(@Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.update(updateBannerDto);
  }

  @ApiOperation({
    summary: '通知公告-删除',
  })
  @RequirePermission('system:banner:remove')
  @Delete(':id')
  remove(@Param('id') ids: string) {
    const noticeIds = ids.split(',').map((id) => +id);
    return this.bannerService.remove(noticeIds);
  }
}
