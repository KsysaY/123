import { Transport } from "./lab4";

const myData: Transport.OwnerClass = new Transport.OwnerClass(
   "Яшина",
    "Ксения",
    "Алексеевна",
    new Date(),
    Transport.DocType.Passport,
    "123",
    "456"
);

const myCar: Transport.MotorbikeClass = new Transport.MotorbikeClass(
    "L",
    "dgf",
    12,
    "123",
    "666",
    myData,
    "Диагональная",
    true
)

myCar.printMotorbikeInfo();