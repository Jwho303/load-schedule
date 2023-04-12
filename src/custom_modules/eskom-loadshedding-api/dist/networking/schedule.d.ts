import HTTPClient from './HTTPClient';
import { LoadsheddingStage } from '../enums/LoadsheddingStage';
import { LoadsheddingSchedule } from '../models/LoadsheddingSchedule';
export declare class Schedule extends HTTPClient {
    private static getScheduleRaw;
    static getScheduleRawHTML(suburbId: number, stage: LoadsheddingStage): Promise<string>;
    static getScheduleRawText(suburbId: number, stage: LoadsheddingStage): Promise<string>;
    static getSchedule(suburbId: number, stage: LoadsheddingStage): Promise<LoadsheddingSchedule>;
    static getFullSchedule(suburbId: number): Promise<LoadsheddingSchedule[]>;
}
