const express = require('express');
const { WebhookClient } = require('discord.js');

const contactRouter = express.Router();
const hook = new WebhookClient(process.env.DISCORD_WEBHOOK_ID, process.env.DISCORD_WEBHOOK_TOKEN);

contactRouter.route('/message')
    .post((req, res) => {
        const time = new Date();

        console.log(`[${time.toDateString()} ${time.toLocaleTimeString()}]: POST REQUEST FROM ${req.headers.origin}/${req.ip} - DATA [ ${JSON.stringify(req.body)} ]`);
        const emailRegexp = /\w+@{1}\w+[.]\w+/;
        if (req.body.iname && req.body.iemail && req.body.imsg) {
            if (!req.body.iemail.match(emailRegexp) ){
                console.log(`${time.toDateString()} ${time.toLocaleTimeString()}: BAD REQUEST - INVALID EMAIL`);
                res.status(400).send('Invalid Email')
                res.end();
                return
            }
            hook.send(`**Name:** ${req.body.iname}\n**Email:** ${req.body.iemail}\n**Message:**\n\`\`\`${req.body.imsg}\n\`\`\``)
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
        res.end();
        // res.redirect(req.headers.origin)
    });

module.exports = contactRouter;