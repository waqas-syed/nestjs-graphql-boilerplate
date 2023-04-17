import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { People } from './models/people.models';
import { PeopleService } from './people.service';
import { query } from 'express';

@Resolver(of => People)
export class PeopleResolver {
    constructor(private peopleService: PeopleService) {}

    @Query(returns => People, {name: 'people'})
    async people(@Args('id', { type:  () => Int }) id :number): Promise<People> {
        console.log("Invoked the People endpoint");
        const people = this.peopleService.findPeopleByCompanyId();
        return people;
    }
}
