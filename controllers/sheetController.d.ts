import type { Request, Response } from 'express';
import type { CharacterSheet, SheetTemplate } from '@motor-vtt/contracts';
import type { ApiResponse, ValidatedLocals } from '../http/types.js';
import type { CreateSheetBody, CreateTemplateBody, UpdateTemplateBody, RoomTemplateParams, SheetIdParams, UpdateValuesBody, LinkSheetBody, TokenSheetParams, ImportSheetParams } from '../routes/sheetSchemas.js';
export declare function createSheetTemplate(req: Request, res: Response<ApiResponse<SheetTemplate>, ValidatedLocals<CreateTemplateBody, undefined, undefined>>): Promise<void>;
export declare function getUserLibrary(req: Request, res: Response<ApiResponse<{
    templates: SheetTemplate[];
    sheets: CharacterSheet[];
}>>): Promise<void>;
export declare function cloneSheet(req: Request, res: Response<ApiResponse<CharacterSheet>, ValidatedLocals<undefined, undefined, SheetIdParams>>): Promise<void>;
export declare function cloneTemplate(req: Request, res: Response<ApiResponse<SheetTemplate>, ValidatedLocals<undefined, undefined, SheetIdParams>>): Promise<void>;
export declare function listSheetTemplates(req: Request, res: Response<ApiResponse<SheetTemplate[]>>): Promise<void>;
export declare function updateSheetTemplate(req: Request, res: Response<ApiResponse<SheetTemplate>, ValidatedLocals<UpdateTemplateBody, undefined, SheetIdParams>>): Promise<void>;
export declare function deleteSheetTemplate(req: Request, res: Response<void, ValidatedLocals<undefined, undefined, SheetIdParams>>): Promise<void>;
export declare function listRoomTemplates(req: Request, res: Response<ApiResponse<SheetTemplate[]>, ValidatedLocals<undefined, undefined, {
    salaId: string;
}>>): Promise<void>;
export declare function addRoomTemplate(req: Request, res: Response<void, ValidatedLocals<undefined, undefined, RoomTemplateParams>>): Promise<void>;
export declare function removeRoomTemplate(req: Request, res: Response<void, ValidatedLocals<undefined, undefined, RoomTemplateParams>>): Promise<void>;
export declare function getSheetTemplate(_req: Request, res: Response<ApiResponse<SheetTemplate>, ValidatedLocals<undefined, undefined, SheetIdParams>>): Promise<void>;
export declare function getCharacterSheet(req: Request, res: Response<ApiResponse<CharacterSheet>, ValidatedLocals<undefined, undefined, SheetIdParams>>): Promise<void>;
export declare function createCharacterSheet(req: Request, res: Response<ApiResponse<CharacterSheet>, ValidatedLocals<CreateSheetBody, undefined, undefined>>): Promise<void>;
export declare function updateCharacterSheetValues(req: Request, res: Response<ApiResponse<CharacterSheet>, ValidatedLocals<UpdateValuesBody, undefined, SheetIdParams>>): Promise<void>;
export declare function linkSheetToToken(req: Request, res: Response<void, ValidatedLocals<LinkSheetBody, undefined, TokenSheetParams>>): Promise<void>;
export declare function importCharacterSheet(req: Request, res: Response<ApiResponse<CharacterSheet>, ValidatedLocals<undefined, undefined, ImportSheetParams>>): Promise<void>;
//# sourceMappingURL=sheetController.d.ts.map