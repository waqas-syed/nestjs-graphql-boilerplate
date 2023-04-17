import { Injectable } from '@nestjs/common';
import { People } from './models/people.models';

@Injectable()
export class PeopleService {
    async findPeopleByCompanyId(): Promise<People> {
        const people = new People();
        people.id = 2;
        people.firstName = "California";
        people.lastName = "Love";
        return Promise.resolve(people);
    }
}
