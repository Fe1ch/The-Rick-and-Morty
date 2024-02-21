export interface CardType {
        id: number;
        name: string;
        image: string;
        isLiked: boolean;
}

export  interface  CardResultType {
    results: CardType[]
}

 export  interface  CardsType {
    cards : CardType[]
     error : undefined | string,
     isLoading : boolean,
     isFilter : boolean,
     card : null | CardType;
 }