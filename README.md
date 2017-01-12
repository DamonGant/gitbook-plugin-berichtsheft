# Gitbook Berichtsheft

## Setup

Here's a `book.json` to start from.

```json
{
  "title": "Berichtsheft - Alexander Schittler - IT14B",
  "plugins": ["customtheme", "berichtsheft"],
  "language": "de",
  "pdf": {
    "fontFamily": "Open Sans"
  },
  "pluginsConfig": {
       "customtheme": {
         "css": ["/app.css"],
         "js": ["/app.js"]
       }
    }
}
```

You can find `app.css` and `app.js` in the `contrib` folder.
