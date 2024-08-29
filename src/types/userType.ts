export interface User {
    id: number;
    uuid: string;
    password: string;
    article: string;
    profile: Profile;
}

export interface Profile {
    username: string;
    profile_img_url: string;
    twitter_url: string;
    facebook_url: string;
    description: string;
}