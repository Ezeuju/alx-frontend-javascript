/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`);

const updatedRow: RowElement = {
    ...row,
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
