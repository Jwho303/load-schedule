export declare class SuburbRaw {
    id: string;
    text: string;
    Tot: number;
    constructor(suburb: SuburbRaw);
}
export declare class Suburb {
    id: number;
    name: string;
    total: number;
    constructor(suburb: Suburb);
    static fromRaw(suburb: SuburbRaw): Suburb;
}
