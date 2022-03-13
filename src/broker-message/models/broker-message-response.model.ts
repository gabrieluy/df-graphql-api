import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrokerMessageResponse {
  @Field({ description: 'True if the message was sent correctly'})
  success: boolean;

  @Field({ nullable: true, description: 'Error message if success is false'})
  error?: string;
}
