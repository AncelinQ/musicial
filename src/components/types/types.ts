//Main type with properties presents in User, Band and Ad
export interface IEntity {
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
    nickName: String;
    age: Number;
    gender: Number;
    instruments: String[];
    formerBand: String[];
    bands: IBand[];
    isManager: Boolean;
}

export interface IBand extends IEntity {
    name: String;
    members: IUser[];
    admin: IUser[];
    sinc: Date;
    contact?: String;
    formerName: String;
    concerts: IConcert[];
}

export interface IConcert {
    band: IBand
    date: Date
    time: Date
    location: String
    price: Number
}

export interface IInteractions {
    content: String;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAd extends IInteractions, IEntity {
    priority: String
}

export interface IMessage extends IInteractions {
    recipient: IEntity
}