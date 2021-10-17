import { IUser, IBand, IAd } from "../components/types/types"

export const Users: IUser[] = [
    {
        id: 1,
        firstName: "Michel",
        lastName: "Michel",
        email: "mich.mich@fake.co",
        age: 24,
        gender: 1,
        instruments: ["guitare", "basse"],
        city: "Lyon",
        isManager: false,
        description: "Salut c'est Michel, bla bla bla",
        artistReferences: ["Deep Purple", "Iron Maiden"],
        songReferences: ["Stairway to Heaven", "Highway to Hell"],
        styles: ["Metal", "Pop"],
    },
    {
        id: 2,
        firstName: "Philippe",
        lastName: "Philippou",
        email: "ptiphilou@fake.co",
        age: 21,
        gender: 1,
        instruments: ["clavier", "flûte"],
        city: "Paris",
        isManager: true,
        description: "Salut c'est Philou",
        styles: ["Rock", "Rap"],
        artistReferences: ["IAM", "NTM"],
        songReferences: ["Ma Benz", "Le Mia"],
    },
]

export const Bands: IBand[] = [
    {
        id: 1,
        name: "Lorem",
        admin: [Users[1]],
        city: "Lyon",
        styles: ["metal", "Indie"],
        artistReferences: ["Cannibal Corpse", "Craddle of Filth"],
        songReferences: ["Hammer Smashed Face", "Place des Grands Hommes"],
    },
    {
        id: 2,
        name: "Ipsum",
        admin: [Users[1]],
        city: "Paris",
        styles: ["Rock", "Cumbia"],
        artistReferences: ["Téléphone", "Quantic"],
        songReferences: ["Satisfaction", "Chan Chan"],
    }
]

export const Ads: IAd[] = [
    {
        id: 1,
        title: "Recherche Guitariste",
        content: "Salut on recherche un guitariste",
        city: "Lyon",
        createdAt: new Date("2021-10-05"),
        createdBy: Bands[1]
    },
    {
        id: 2,
        title: "Recherche groupe de Metal",
        content: "Salut je recherche un groupe de métal",
        city: "Lyon",
        createdAt: new Date("2021-10-15"),
        createdBy: Users[1]
    }
] 