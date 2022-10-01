require("dotenv").config();

const amqp = require("amqplib");
const listener = require("./listener");

const init = async () => {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);

    const channel = await connection.createChannel();

    await channel.assertQueue("export:playlists", { durable: true });

    channel.consume("export:playlists", listener, { noAck: true });

    console.log("Consumer started listening...");
};

init();
