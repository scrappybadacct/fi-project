import express from "express";

const server = express()

server.use((req, res) => res.send("Hi there!"));

export default server;