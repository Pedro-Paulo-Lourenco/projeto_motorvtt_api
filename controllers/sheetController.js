import { HttpError } from '../http/errors.js';
import { sendSuccess } from '../http/response.js';
import { sheetService } from '../services/sheetService.js';
export async function createSheetTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    const body = res.locals.validated.body;
    sendSuccess(res, 201, await sheetService.createTemplate({
        usuarioId: req.user.id,
        nome: body.nome,
        ...(body.camposSchema === undefined ? {} : { camposSchema: body.camposSchema }),
        ...(body.sistema === undefined ? {} : { sistema: body.sistema }),
        ...(body.salaId === undefined ? {} : { salaId: body.salaId }),
    }));
}
export async function getUserLibrary(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 200, await sheetService.getUserLibrary(req.user.id));
}
export async function cloneSheet(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 201, await sheetService.cloneSheet(res.locals.validated.params.id, req.user.id));
}
export async function cloneTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 201, await sheetService.cloneTemplate(res.locals.validated.params.id, req.user.id));
}
export async function listSheetTemplates(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 200, await sheetService.listTemplates(req.user.id));
}
export async function updateSheetTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 200, await sheetService.updateTemplate(res.locals.validated.params.id, req.user.id, res.locals.validated.body));
}
export async function deleteSheetTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    await sheetService.deleteTemplate(res.locals.validated.params.id, req.user.id);
    res.status(204).send();
}
export async function listRoomTemplates(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 200, await sheetService.listRoomTemplates(res.locals.validated.params.salaId, req.user.id));
}
export async function addRoomTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    await sheetService.addRoomTemplate(res.locals.validated.params.salaId, res.locals.validated.params.templateId, req.user.id);
    res.status(204).send();
}
export async function removeRoomTemplate(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    await sheetService.removeRoomTemplate(res.locals.validated.params.salaId, res.locals.validated.params.templateId, req.user.id);
    res.status(204).send();
}
export async function getSheetTemplate(_req, res) {
    sendSuccess(res, 200, await sheetService.getTemplateById(res.locals.validated.params.id));
}
export async function getCharacterSheet(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    sendSuccess(res, 200, await sheetService.getCharacterSheetById(res.locals.validated.params.id, req.user.id));
}
export async function createCharacterSheet(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    const body = res.locals.validated.body;
    sendSuccess(res, 201, await sheetService.createSheet({
        usuarioId: req.user.id,
        templateId: body.templateId,
        nome: body.nome,
        ...(body.salaId === undefined ? {} : { salaId: body.salaId }),
        ...(body.dadosPreenchidos === undefined ? {} : { dadosPreenchidos: body.dadosPreenchidos }),
    }));
}
export async function updateCharacterSheetValues(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    const { id } = res.locals.validated.params;
    sendSuccess(res, 200, await sheetService.updateSheetValues(id, req.user.id, res.locals.validated.body));
}
export async function linkSheetToToken(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    const { salaId, tokenId } = res.locals.validated.params;
    await sheetService.linkSheetToToken(salaId, tokenId, res.locals.validated.body.sheetId, req.user.id);
    res.status(204).send();
}
export async function importCharacterSheet(req, res) {
    if (!req.user)
        throw new HttpError(401, 'UNAUTHORIZED', 'Não autorizado.');
    const { salaId, id } = res.locals.validated.params;
    sendSuccess(res, 200, await sheetService.importSheetToRoom(id, salaId, req.user.id));
}
//# sourceMappingURL=sheetController.js.map