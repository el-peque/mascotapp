import { PartialType } from '@nestjs/mapped-types';
import { catDTO } from "./cat.dto";

export class updateCatDTO extends PartialType(catDTO) {}