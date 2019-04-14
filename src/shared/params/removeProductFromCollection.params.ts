import { ShopParams } from "./shop.params";
import { ApiModelProperty } from "@nestjs/swagger";

export class RemoveProductFromCollectionParams extends ShopParams {
    @ApiModelProperty()
    collection_id: string;
}