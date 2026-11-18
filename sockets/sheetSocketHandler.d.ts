import type { Server, Socket } from 'socket.io';
interface SheetSocketContext {
    getRoomId: (socket: Socket) => string | undefined;
    confirmSession: () => Promise<boolean>;
    serializeRoom: <T>(roomId: string, operation: () => Promise<T>) => Promise<T>;
}
export declare function registerSheetSocketHandler(socket: Socket, io: Server, context: SheetSocketContext): void;
export {};
//# sourceMappingURL=sheetSocketHandler.d.ts.map