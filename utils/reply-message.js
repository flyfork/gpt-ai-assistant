import config from '../config/index.js';
import { reply } from '../services/line.js';

const replyMessage = ({
  replyToken,
  messages,
}) => {
  if (config.APP_ENV === 'production') {
    return reply({ replyToken, messages });
  }
  return { replyToken, messages };
};

export default replyMessage;
