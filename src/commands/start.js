"use strict";

const MESSAGES = require('../common/messages');

module.exports = bot => {
  bot.onText(/\/start/, message => {
    const fromId = message.from.id;
    bot.sendMessage(fromId, MESSAGES.START_MESSAGE);
  });
};
