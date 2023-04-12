import HTTPClient from './HTTPClient';
import { LoadsheddingStage, LoadsheddingStageRaw } from '../enums/LoadsheddingStage';
export declare class Status extends HTTPClient {
    static getStatusRaw(): Promise<LoadsheddingStageRaw>;
    static getStatus(): Promise<LoadsheddingStage>;
}
