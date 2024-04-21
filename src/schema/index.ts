export interface Schema {
    tableName: string;
    fields: Field[];
}

export enum FieldType {
    INTEGER = 'INTEGER',
    TEXT = 'TEXT',
    REAL = 'REAL',
    BLOB = 'BLOB',
    BOOLEAN = 'BOOLEAN',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    TIMESTAMP = 'TIMESTAMP'
}


export interface Field {
    primaryKey?: boolean;
    name: string;
    type: FieldType;
    nullable?: boolean;
}
