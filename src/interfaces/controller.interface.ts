export interface IControllerInterface {
    getCharacters(req: Request, res: Response): Promise<void>;
}