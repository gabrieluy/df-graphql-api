### Description

Graphql API that enables sending messages and consulting validation responses.

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start
```
### Usage

After run the application, go to `http://localhost:3000/graphql` to use the playground.

Example querys:

```bash
mutation 
  sendMessage(brokerId:"1234", message:"Hello world") {
    success
    error
  }
}
```

```bash
{ 
  getValidationResponses(offset:0, limit:10) {
    id
    brokerId
    message
    error
    valid
  }
}
```