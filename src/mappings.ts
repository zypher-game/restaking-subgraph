import { BigInt } from '@graphprotocol/graph-ts';

import {
  AnswerUpdated,
} from '../generated/ChainlinkDataFeed/DataFeed'

import { DataFeed as DataFeedContract } from '../generated/ChainlinkDataFeed/DataFeed'
import { DataFeed } from '../generated/schema';

export function handleAnswerUpdated(event: AnswerUpdated): void {
  event.params.current;
  event.params.roundId;
  event.params.updatedAt;

  let feed = DataFeed.load(event.address)
  if (!feed) {
    const contract = DataFeedContract.bind(event.address)
    feed = new DataFeed(event.address)
    feed.decimals = contract.decimals()
    feed.description = contract.description()
    feed.value = BigInt.fromI32(0)

    feed.updatedAt = BigInt.fromI32(0)
    feed.save()
  }

  feed.value = event.params.current
  feed.updatedAt = event.block.timestamp
  feed.save()
}
