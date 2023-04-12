export declare class SearchSuburbRaw {
    MunicipalityName: string;
    ProvinceName: string;
    Name: string;
    Id: number;
    Total: number;
    constructor(searchSuburb: SearchSuburbRaw);
}
export declare class SearchSuburb {
    municipality: string;
    province: string;
    suburb: string;
    id: number;
    total: number;
    constructor(searchSuburb: SearchSuburb);
    static fromRaw(searchSuburb: SearchSuburbRaw): SearchSuburb;
}
