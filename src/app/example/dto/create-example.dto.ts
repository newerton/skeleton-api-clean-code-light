import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleDto {
  @ApiProperty()
  title: string;
}
