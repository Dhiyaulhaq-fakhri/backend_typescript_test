import pg from "pg";

const { Client } = pg;

const client = new Client({
    connectionString:
        "postgresql://postgres.qgfzuptmvylnpnyxyzwv:Nicetry2050super@aws-1-ap-south-1.pooler.supabase.com:5432/postgres",
    ssl: {
        rejectUnauthorized: false,
    },
});

async function test() {
    try {
        console.log("Connecting...");
        await client.connect();
        console.log("SUCCESS CONNECT");
    } catch (err) {
        console.error("ERROR:");
        console.error(err);
    } finally {
        await client.end();
    }
}

test();