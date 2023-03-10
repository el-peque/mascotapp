import { PartialType } from '@nestjs/mapped-types';
import { userDTO } from './users.dto';

export class updateUserDTO extends PartialType(userDTO) {}