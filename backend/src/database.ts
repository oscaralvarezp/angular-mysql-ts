import { createPool } from "mysql2/promise";
import keys from "./keys";

export async function mysqlConnection() {
    const mysqlConnection = createPool(keys.database);
    return mysqlConnection;
}