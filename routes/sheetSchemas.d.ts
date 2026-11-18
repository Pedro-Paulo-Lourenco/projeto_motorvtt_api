import { z } from 'zod';
export declare const createTemplateSchema: z.ZodObject<{
    nome: z.ZodDefault<z.ZodString>;
    sistema: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    camposSchema: z.ZodOptional<z.ZodObject<{
        cabecalho: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        atributos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        recursos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        pericias: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strict>;
export declare const createSheetSchema: z.ZodObject<{
    templateId: z.ZodString;
    nome: z.ZodString;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dadosPreenchidos: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>;
export declare const updateTemplateSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    sistema: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    salaId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    camposSchema: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        cabecalho: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        atributos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        recursos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        pericias: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof import("@motor-vtt/contracts").SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strict>;
export declare const sheetIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strict>;
export declare const roomIdParamsSchema: z.ZodObject<{
    salaId: z.ZodString;
}, z.core.$strict>;
export declare const roomTemplateParamsSchema: z.ZodObject<{
    salaId: z.ZodString;
    templateId: z.ZodString;
}, z.core.$strict>;
export declare const updateValuesSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const linkSheetSchema: z.ZodObject<{
    sheetId: z.ZodString;
}, z.core.$strict>;
export declare const tokenSheetParamsSchema: z.ZodObject<{
    salaId: z.ZodString;
    tokenId: z.ZodString;
}, z.core.$strict>;
export declare const importSheetParamsSchema: z.ZodObject<{
    salaId: z.ZodString;
    id: z.ZodString;
}, z.core.$strict>;
export type UpdateTemplateBody = z.infer<typeof updateTemplateSchema>;
export type CreateTemplateBody = z.infer<typeof createTemplateSchema>;
export type CreateSheetBody = z.infer<typeof createSheetSchema>;
export type SheetIdParams = z.infer<typeof sheetIdParamsSchema>;
export type RoomTemplateParams = z.infer<typeof roomTemplateParamsSchema>;
export type UpdateValuesBody = z.infer<typeof updateValuesSchema>;
export type LinkSheetBody = z.infer<typeof linkSheetSchema>;
export type TokenSheetParams = z.infer<typeof tokenSheetParamsSchema>;
export type ImportSheetParams = z.infer<typeof importSheetParamsSchema>;
//# sourceMappingURL=sheetSchemas.d.ts.map