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

    console.log(options.message);
  }

  public async queryRaw(queryData: string): Promise<void> {
    this.client
      .query(queryData)
      .then((res) => {
        console.log(res.rows[0]);
      })
      .catch((e) => console.error(e.stack));
  }

  public async create(data: object) {}
}
