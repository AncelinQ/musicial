//Main type with properties presents in User, Band and Ad
export interface IId {
    id?: Number
}

export interface IEntity extends IId {
    name?: String;
    firstName?: String;
    lastName?: String;
    city: String
    picture?: String
    experience?: String //may become mandatory
    objective?: String //may become mandatory
    description?: String //may become mandatory
    styles?: String[] //may become mandatory
    audioLinks?: String[];
    videoLinks?: String[];
    websiteLinks?: String[];
    artistReferences?: String[]
    songReferences?: String[];
    adList?: IAd[];
    messageList?: IMessage[];
    favorites?: IEntity[]
}

export interface IUser extends IEntity {
    email: String;
    firstName: String;
    lastName: String;
    nickName?: String;
    age: Number;
    gender: Number;
    instruments?: String[];
    formerBand?: String[];
    bands?: IBand[];
    isManager: Boolean;
}

export interface IBand extends IEntity {
    name: String;
    members?: IUser[];
    admin: IUser[];
    since?: Date;
    contact?: String;
    formerName?: String;
    concerts?: IConcert[];
}

export interface IConcert extends IId {
    band: IBand
    date: Date
    time: Date
    location: String
    price?: Number
}

export interface IItems {
    content: String;
    createdAt: Date;
    updatedAt?: Date;
    createdBy: IUser | IBand;
}

export interface IAd extends IItems, IEntity {
    priority?: String
    title: String
}

export interface IMessage extends IItems, IId {
    recipient: IUser
}