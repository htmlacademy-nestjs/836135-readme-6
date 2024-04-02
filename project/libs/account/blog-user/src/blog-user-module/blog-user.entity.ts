import { Entity } from '@project/shared/core';
import { StorableEntity, AuthUser } from '@project/shared/core';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
    public email: string;
    public username: string;
    public passwordHash: string;

    constructor(user?: AuthUser) {
        super();
        this.populate(user);
    }

    public populate(user?: AuthUser): void {
        if (!user) {
            return;
        }

        this.id = this.id ?? '';
        this.email = user.email;
        this.username = user.username;
        this.passwordHash = user.passwordHash;
    }

    public toPOJO(): AuthUser {
        return {
            id: this.id,
            email: this.email,
            username: this.username,
            passwordHash: this.passwordHash,
        }
    }
}