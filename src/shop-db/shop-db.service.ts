import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IShop } from 'src/shared/interfaces/IShop.interface';

@Injectable()
export class ShopDbService {
  constructor(
    @Inject('GetShopModelToken') private readonly shopModel: Model<IShop>,
  ) {}

  async getShopDbData(shop): Promise<any> {
    try {
      const shopData = await this.shopModel.findOne({ shop: shop }).exec();
      return shopData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createShopDbData(shop, accessToken): Promise<any> {
    const tuple = new this.shopModel({ shop, accessToken });
    const exists = await this.shopModel.findOne({ shop: shop }).exec();

    if (exists === null) {
      return await tuple.save();
    }
    return null;
  }
}
