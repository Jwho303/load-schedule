export declare enum LoadsheddingStageRaw {
    UNKNOWN = -1,
    NOT_LOADSHEDDING = 1,
    STAGE_1 = 2,
    STAGE_2 = 3,
    STAGE_3 = 4,
    STAGE_4 = 5,
    STAGE_5 = 6,
    STAGE_6 = 7,
    STAGE_7 = 8,
    STAGE_8 = 9
}
export declare enum LoadsheddingStage {
    UNKNOWN = -1,
    NOT_LOADSHEDDING = 0,
    STAGE_1 = 1,
    STAGE_2 = 2,
    STAGE_3 = 3,
    STAGE_4 = 4,
    STAGE_5 = 5,
    STAGE_6 = 6,
    STAGE_7 = 7,
    STAGE_8 = 8
}
export declare function unmapRaw(status: LoadsheddingStageRaw): LoadsheddingStage;
