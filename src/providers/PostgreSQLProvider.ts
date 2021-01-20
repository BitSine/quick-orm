import { Pool } from "pg";
import { PostgreSQLOptions } from "../interfaces/ProviderOptions";

export class PostgreSQLProvider {
  private client: Pool;

  public constructor(options: PostgreSQLOptions) {
    this.client = new Pool({
      user: options.user,
      password: options.password,
      host: options.host,
      database: options.db,
      port: options.port,
    });
  }

  public async queryRaw(queryData: string): Promise<void> {
    this.client.query(queryData, (err, res) => {
      if (err) {
        throw new Error(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    });
  }
}
