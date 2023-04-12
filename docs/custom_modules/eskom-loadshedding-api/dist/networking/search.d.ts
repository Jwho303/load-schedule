import HTTPClient from './HTTPClient';
import { Province } from '../enums/Province';
import { Municipality, MunicipalityRaw } from '../models/Municipality';
import { SuburbRaw, Suburb } from '../models/Suburb';
import { SearchSuburbRaw, SearchSuburb } from '../models/SearchSuburb';
export declare class Search extends HTTPClient {
    static getMunicipalitiesRaw(province: Province): Promise<MunicipalityRaw[]>;
    static getMunicipalities(province: Province): Promise<Municipality[]>;
    static getMunicipalitySuburbsRaw(municipalityId: number, searchTerm?: string, pageNum?: number): Promise<SuburbRaw[]>;
    static getMunicipalitySuburbs(municipalityId: number, searchTerm?: string, pageNum?: number): Promise<Suburb[]>;
    static searchSuburbsRaw(searchTerm: string, maxResults?: number): Promise<SearchSuburbRaw[]>;
    static searchSuburbs(searchTerm: string, maxResults?: number): Promise<SearchSuburb[]>;
}
