import { ApiProperty } from '@nestjs/swagger';

export class ListAllExamplesDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}
