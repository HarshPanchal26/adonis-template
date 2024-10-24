# Adonis boilerplate 

## Setup

### Prerequisite

- nodeJS v18
- MySQL 8

MySQL and redis you can run via docker-compose: `docker-compose up -d` or `docker compose up -d`
to down docker-compose services as `docker-compose down` or `docker compose down`

```sql
SET  GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

### Code local setup

```
git clone git@github.com:divamtech/goavido-server.git
npm i
cp .env.example .env
npm run db:setup
```

NOTE: Setup .env file locally as per your local system use case.

### Run code locally

```
npm run dev
```

While running locally, no need to run worker separately, it's already part of server code.

#### For debugging

```
npm run debug
```

<!-- ## Docker & CI/CD

```sh
docker build . -t local-app:1.0 --no-cache

docker run -itd --env-file .env -e APP_TYPE=server -p 3333:3333 -p 9999:9999 --name server local-app:1.0
docker run -itd --env-file .env -e APP_TYPE=worker -p 4444:3333  -p 10000:9999 --name worker local-app:1.0
```

