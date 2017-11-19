interface SpotifyID {
    id: string
}

interface Entity extends SpotifyID{
    name: string
}

export interface Artist extends Entity{}

export interface AlbumImage{
    url: string
    height: number
    width: number
}

export interface Album extends Entity {
    artists: Artist[]
    images: AlbumImage[]
}

