FROM node
WORKDIR /thbs-app
COPY ..
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-step /thbs-app/dist/* /usr/share/nginx/html