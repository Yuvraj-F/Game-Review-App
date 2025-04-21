type Game = {
    gameId: number,
    title: string,
    genreId: number,
    creatorId: number,
    creatorFirstName: string,
    creatorLastName: string,
    rating: number,
    platformIds:number[],
    price:number,
    creationDate: string
}

type Genre = {
    genreId: number,
    name: string
}

type Platform = {
    platformId: number,
    name: string
}