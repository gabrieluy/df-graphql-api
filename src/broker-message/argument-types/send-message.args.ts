import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class SendMessageArgs {
  @Field({ description: 'Id of receiver broker'})
  brokerId: string;

  @Field({ description: 'Message to send'})
  message: string;
}
