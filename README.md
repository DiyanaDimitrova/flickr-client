# flickr-client

## Setup

To setup the application you need to have installed npm or yarn, and run the following command

```
$ yarn install
```

## Running

To run the application you need to run the following command

```
$ yarn start
```

## Testing

To test the application you need to run the following commands

```
$ yarn test
```

## Build

The application can be build with the following command

```
$ yarn build
```

## Features

Flickr Photo Stream

- SPA application that represents Flickr Photo Stream
- Support the major browsers and have resposive design
- The application is build with lazy loading and infinite scroll
- The user can search the photo posts by exact tag
- The UI is implemented with the help of Ant Design and Sass pre-compiler
- React is used for the view layer and Redux for state container
- The application is bootstrapped with the help of Create React App
- Tests are implemented with the help of Jest and Enzyme
- Custom API is used for the fetch of the photo posts

## Docker

You need to have installed docker on your machine!

To build image locally execute the following command:

```
$ docker build -t <name> .
```

To run execute the following command:

```
$ docker run -p 3000:3000 -d <name>
```

# License

MIT
