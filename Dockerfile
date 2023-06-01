FROM golang:1.20 AS backend

WORKDIR /app

COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend .
RUN CGO_ENABLED=0 go build -o /out/app ./main.go

FROM node:18 AS frontend

WORKDIR /app

COPY frontend/package*.json .
RUN npm install

COPY frontend .
RUN npm run build

FROM scratch

WORKDIR /out

COPY --from=backend /out/app /out/app
COPY --from=frontend /app/dist /out/public
ENTRYPOINT ["./app"]