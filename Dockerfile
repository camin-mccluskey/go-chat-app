FROM golang:1.14.3-alpine AS build

WORKDIR /src

COPY main.go .
COPY go.mod .
COPY ./public ./public

RUN go build

EXPOSE 5000

CMD ["./main"]
