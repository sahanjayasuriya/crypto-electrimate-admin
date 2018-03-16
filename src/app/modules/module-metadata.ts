export class Module {
    private _owner: string;

    private _id: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    private _moduleCode: string;

    get moduleCode(): string {
        return this._moduleCode;
    }

    set moduleCode(value: string) {
        this._moduleCode = value;
    }

    private _moduleName: string;

    get moduleName(): string {
        return this._moduleName;
    }

    set moduleName(value: string) {
        this._moduleName = value;
    }

    private _sensorCount: number;

    get sensorCount(): number {
        return this._sensorCount;
    }

    set sensorCount(value: number) {
        this._sensorCount = value;
    }
}