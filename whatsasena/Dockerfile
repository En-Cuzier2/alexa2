FROM fusuf/whatsasena:latest

RUN git clone https://github.com/En-Cuzier/alexa2 /alexa2
WORKDIR /root/alexa2/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
