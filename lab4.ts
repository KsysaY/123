export namespace Transport {

    export enum DocType {
        Passport = "Паспорт",
        IDCard = "Удостоверение личности",
        DriverLicense = "Водительские права"
    }

    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        
        printOwnerInfo(): void;
    }

    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;

        printVehicleInfo(): void;
    }

    export class OwnerClass implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _documentType: DocType;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            documentType: DocType,
            documentSeries: string,
            documentNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }

        public get lastName(): string {
            return this._lastName;
        }

        public get firstName(): string {
            return this._firstName;
        }

        public get middleName(): string {
            return this._middleName;
        }

        public get birthDate(): Date {
            return this._birthDate;
        }

        public get documentType(): DocType {
            return this._documentType;
        }

        public get documentSeries(): string {
            return this._documentSeries;
        }

        public get documentNumber(): string {
            return this._documentNumber;
        }

        public set lastName(value: string) {
            this._lastName = value;
        }

        public set firstName(value: string) {
            this._firstName = value;
        }

        public set middleName(value: string) {
            this._middleName = value;
        }

        public set birthDate(value: Date) {
            this._birthDate = value;
        }

        public set documentType(value: DocType) {
            this._documentType = value;
        }

        public set documentSeries(value: string) {
            this._documentSeries = value;
        }

        public set documentNumber(value: string) {
            this._documentNumber = value;
        }

        public printOwnerInfo(): void {
            console.log(`Владелец:
                Фамилия: ${this.lastName}
                Имя: ${this.firstName}
                Отчество: ${this.middleName}
                Дата рождения: ${this.birthDate.toLocaleDateString()}
                Тип: ${this.documentType}
                Серия: ${this.documentSeries}
                Номер: ${this.documentNumber}`);
        }
    }

    export class VehicleClass implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }

        public get brand(): string {
            return this._brand;
        }

        public get model(): string {
            return this._model;
        }

        public get year(): number {
            return this._year;
        }

        public get vin(): string {
            return this._vin;
        }

        public get registrationNumber(): string {
            return this._registrationNumber;
        }

        public get owner(): Owner {
            return this._owner;
        }

        public set brand(value: string) {
            this._brand = value;
        }

        public set model(value: string) {
            this._model = value;
        }

        public set year(value: number) {
            this._year = value;
        }

        public set vin(value: string) {
            this._vin = value;
        }

        public set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        public set owner(value: Owner) {
            this._owner = value;
        }

        public printVehicleInfo(): void {
            console.log(`Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}`);
        }
    }

    export enum BodyType {
        Sedan = "Седан",
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Coupe = "Купе",
        Convertible = "Кабриолет"
    }

    export enum CarClass {
        Economy = "Эконом",
        MidSize = "Средний",
        Luxury = "Люкс",
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;

        printCarInfo(): void;
    }

    export class Car_Class implements Car {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }

        printCarInfo(): void {
            throw new Error("Method not implemented.");
        }

        public get brand(): string {
            return this._brand;
        }

        public get model(): string {
            return this._model;
        }

        public get year(): number {
            return this._year;
        }

        public get vin(): string {
            return this._vin;
        }

        public get registrationNumber(): string {
            return this._registrationNumber;
        }

        public get owner(): Owner {
            return this._owner;
        }

        public get bodyType(): BodyType {
            return this._bodyType;
        }

        public get carClass(): CarClass {
            return this._carClass;
        }

        public set brand(value: string) {
            this._brand = value;
        }

        public set model(value: string) {
            this._model = value;
        }

        public set year(value: number) {
            this._year = value;
        }

        public set vin(value: string) {
            this._vin = value;
        }

        public set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        public set owner(value: Owner) {
            this._owner = value;
        }

        public set bodyType(value: BodyType) {
            this._bodyType = value;
        }

        public set carClass(value: CarClass) {
            this._carClass = value;
        }

        public printVehicleInfo(): void {
            console.log(`Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}
                Тип кузова: ${this.bodyType}
                Класс автомобиля: ${this.carClass}`);
        }
    }

    export interface Motorbike extends Vehicle {
        frameType: string;
        forSport: boolean;

        printMotorbikeInfo(): void;
    }

    export class MotorbikeClass implements Vehicle{
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _frameType: string;
        private _forSport: boolean; 

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            forSport: boolean
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._forSport = forSport;
        }

        printVehicleInfo(): void {
            throw new Error("Method not implemented.");
        }

        public get brand(): string {
            return this._brand;
        }

        public get model(): string {
            return this._model;
        }

        public get year(): number {
            return this._year;
        }

        public get vin(): string {
            return this._vin;
        }

        public get registrationNumber(): string {
            return this._registrationNumber;
        }

        public get owner(): Owner {
            return this._owner;
        }

        public get frameType(): string {
            return this._frameType;
        }

        public get forSport(): boolean {
            return this._forSport;
        }

        public set brand(value: string) {
            this._brand = value;
        }

        public set model(value: string) {
            this._model = value;
        }

        public set year(value: number) {
            this._year = value;
        }

        public set vin(value: string) {
            this._vin = value;
        }

        public set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        public set owner(value: Owner) {
            this._owner = value;
        }

        public set frameType(value: string) {
            this._frameType = value;
        }

        public set forSport(value: boolean) {
            this._forSport = value;
        }

        public printMotorbikeInfo(): void {
            console.log(`Мотоцикл:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN: ${this.vin}
                Регистрационный номер: ${this.registrationNumber}
                Тип рамы: ${this.frameType}
                Спортивный: ${this.forSport}`);
                this.owner.printOwnerInfo();
        }
    }

    export interface VehicleStorage<T extends Vehicle> {
        createdDate: Date;
        vehicles: T[];

        getAllVehicles(): T[];
    }

    export class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
        public createdDate: Date;
        public vehicles: T[];

        constructor(
            createdDate: Date, 
            vehicles: T[] = []
        ) {
            this.createdDate = createdDate;
            this.vehicles = vehicles;
        }

        public getAllVehicles(): T[] {
            return this.vehicles; 
        }

        public addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }
    }

}