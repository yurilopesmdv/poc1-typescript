import pg from "pg";
import dotenv from "dotenv"

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://yurilopesm:oT97ScOFBzPzrkabcqfWqRANFuMmg1j7@dpg-cigs1ud9aq012ev35uj0-a.oregon-postgres.render.com/poc1_dudl',
  ssl: {rejectUnauthorized: false}
})

export { db };