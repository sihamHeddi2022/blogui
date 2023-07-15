
export type Commenty = {
    userId:string,
    reviews:number,
    content:string
}

export type ShortPost={
    title:string,
    description:string,
    image:string,
    _id:string,
    authorId:string,
    comments?:Commenty[]
}