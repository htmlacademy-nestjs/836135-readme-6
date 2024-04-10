import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
    @ApiProperty({
        description: 'The uniq user ID',
        example: '5ce870bf-77d2-45e8-b13b-f34a422407f3'
    })
    @Expose()
    public id: string;


    @ApiProperty({
        description: 'User email',
        example: 'user@user.ru'
    })
    @Expose()
    public email: string;


    @ApiProperty({
        description: 'Access token',
        example: 'ergtsgdfgjerj45345fj'
    })
    @Expose()
    public accessToken: string;
}