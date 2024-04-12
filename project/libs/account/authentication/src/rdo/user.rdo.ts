import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {

    @ApiProperty({
        description: 'The uniq user ID',
        example: '13'
    })
    @Expose()
    public id: string;

    @ApiProperty({
        description: 'User avatar path',
        example: '/images/user.png'
    })
    @Expose()
    public avatar: string;

    @ApiProperty({
        description: 'User uniq email',
        example: 'user@user.ru'
    })
    @Expose()
    public email: string;


    @ApiProperty({
        description: 'User full name',
        example: 'Sergey Sergeev'
    })
    @Expose()
    public username: string;
}