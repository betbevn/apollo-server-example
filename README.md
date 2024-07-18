### Arguments

```
query GetBooks {
  books(id: "1") {
    title
  }
}
```

### Aliases

```
query GetBooks {
  alias1: books(id: "1") {
    title
  }
  alias2: books(id: "2") {
    author
  }
}

```

### Fragments

```
fragment BookFields on Book {
  id
  title
  author
}


query GetBooks {
  books(id: "1") {
    ...BookFields
  }
}

```
