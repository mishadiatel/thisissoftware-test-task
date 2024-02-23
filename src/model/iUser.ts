export interface IUser {
    name: {
        title: string;
        first: string;
        last: string;
    };
    gender: string;
    picture: {
        'large': string;
        'medium': string,
        'thumbnail': string
    },
    email: string;
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
        postcode: 52903,
        coordinates: {
            latitude: string,
            longitude: string
        },
        timezone: {
            offset: string,
            description: string
        }
    };
    id: {
        name: string,
        value: string
    },
}
