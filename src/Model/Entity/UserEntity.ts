interface UserEntity {
    publicId: string
}

interface UserEntityCollection {
    [key: string]: UserEntity
}

export type {
    UserEntity,
    UserEntityCollection,
};
