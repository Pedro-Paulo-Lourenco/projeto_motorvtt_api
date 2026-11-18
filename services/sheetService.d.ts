import { type CharacterSheet, type SheetField, type SheetTemplate } from '@motor-vtt/contracts';
import type { Pool } from 'mysql2/promise';
type JsonRecord = Record<string, unknown>;
type InputSheetField = Omit<SheetField, 'formula' | 'required' | 'attributeId'> & {
    formula?: string | null | undefined;
    required?: boolean | undefined;
    attributeId?: string | null | undefined;
};
type InputSheetFieldsSchema = {
    cabecalho: InputSheetField[];
    atributos: InputSheetField[];
    recursos: InputSheetField[];
    pericias: InputSheetField[];
};
export interface UpdateTemplateData {
    nome?: string | undefined;
    sistema?: string | null | undefined;
    camposSchema?: InputSheetFieldsSchema | undefined;
}
export interface CreateTemplateData {
    usuarioId: string;
    nome?: string;
    sistema?: string | null;
    salaId?: string | null;
    camposSchema?: InputSheetFieldsSchema;
}
export interface CreateSheetData {
    usuarioId: string;
    templateId: string;
    nome: string;
    salaId?: string | null;
    dadosPreenchidos?: JsonRecord;
}
export interface TokenBarUpdate {
    tokenId: string;
    currentValue: number;
    maxValue: number;
}
export declare class SheetService {
    private readonly database;
    constructor(database?: Pool);
    createTemplate(data: CreateTemplateData): Promise<SheetTemplate>;
    listTemplates(userId: string): Promise<SheetTemplate[]>;
    getUserLibrary(userId: string): Promise<{
        templates: SheetTemplate[];
        sheets: CharacterSheet[];
    }>;
    cloneTemplate(templateId: string, userId: string): Promise<SheetTemplate>;
    listRoomTemplates(roomId: string, userId: string): Promise<SheetTemplate[]>;
    addRoomTemplate(roomId: string, templateId: string, userId: string): Promise<void>;
    removeRoomTemplate(roomId: string, templateId: string, userId: string): Promise<void>;
    updateTemplate(id: string, userId: string, data: UpdateTemplateData): Promise<SheetTemplate>;
    deleteTemplate(id: string, userId: string): Promise<void>;
    getTemplateById(id: string): Promise<SheetTemplate>;
    createSheet(data: CreateSheetData): Promise<CharacterSheet>;
    cloneSheet(sheetId: string, userId: string): Promise<CharacterSheet>;
    importSheetToRoom(sheetId: string, roomId: string, userId: string): Promise<CharacterSheet>;
    linkSheetToToken(roomId: string, tokenId: string, sheetId: string, userId: string): Promise<void>;
    getCharacterSheetById(sheetId: string, userId: string): Promise<CharacterSheet>;
    updateSheetValues(sheetId: string, userId: string, newValues: JsonRecord): Promise<CharacterSheet>;
    updateSheetResource(sheetId: string, roomId: string, actorId: string, fieldId: string, newValue: number | JsonRecord): Promise<{
        sheet: CharacterSheet;
        tokenBar?: TokenBarUpdate;
    }>;
    private getSheetById;
    private getSheetForUser;
    private getSheetForRoom;
    private findTokenBar;
    private getSheetRow;
}
export declare const sheetService: SheetService;
export {};
//# sourceMappingURL=sheetService.d.ts.map