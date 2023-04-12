export declare class MunicipalityRaw {
    Selected: boolean;
    Text: string;
    Value: string;
    constructor(municipality: MunicipalityRaw);
}
export declare class Municipality {
    id: number;
    name: string;
    constructor(municipality: Municipality);
    static fromRaw(municipality: MunicipalityRaw): Municipality;
}
