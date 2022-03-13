import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidationResponse {
  @Field(() => ID)
  id: string;

  @Field({ description: 'True if the response is valid'})
  valid: boolean;

  @Field({ description: 'Id of receiver broker'})
  brokerId: string;

  @Field({ description: 'Message sended'})
  message: string;

  @Field({ nullable: true, description: 'Error message if is invalid'})
  error?: string;
}
