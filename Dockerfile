FROM node
COPY package* ./
RUN npm ci
COPY * ./ 
CMD ["node","server.js"]
