import { Controller, Get, Query,Request } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BannerService } from './banner.service';
import { listBannerDto } from './dto';
import { RequirePermission } from 'src/common/decorators/require-premission.decorator';

@ApiTags('banner管理')
@Controller('market/banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) {}

    @ApiOperation({ summary: '营销管理-banner信息' })
    @RequirePermission('system:notice:query')
    @Get('/list')
    findAll(@Query() query: listBannerDto){
        return this.bannerService.findAll(query);
    }
}
