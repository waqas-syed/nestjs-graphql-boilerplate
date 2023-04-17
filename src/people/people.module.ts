import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';

@Module({
  providers: [PeopleResolver, PeopleService]
})
export class PeopleModule {}
