/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SystemPromptWhereInput } from "./SystemPromptWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SystemPromptListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SystemPromptWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemPromptWhereInput)
  @IsOptional()
  @Field(() => SystemPromptWhereInput, {
    nullable: true,
  })
  every?: SystemPromptWhereInput;

  @ApiProperty({
    required: false,
    type: () => SystemPromptWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemPromptWhereInput)
  @IsOptional()
  @Field(() => SystemPromptWhereInput, {
    nullable: true,
  })
  some?: SystemPromptWhereInput;

  @ApiProperty({
    required: false,
    type: () => SystemPromptWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemPromptWhereInput)
  @IsOptional()
  @Field(() => SystemPromptWhereInput, {
    nullable: true,
  })
  none?: SystemPromptWhereInput;
}
export { SystemPromptListRelationFilter as SystemPromptListRelationFilter };
