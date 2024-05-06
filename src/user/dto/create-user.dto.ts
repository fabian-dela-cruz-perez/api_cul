import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({},{
    message:'formato invalido de correo, verfique que tenga el @ '
  })
  e_mail: string;

  @IsNotEmpty()
  first_name: string;
  last_name: string;
}
// como hacer para que no se salga de jyson