module.exports = {
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary", "lcov"
      ],
      "exclude": [],

      "include": [
        "**/birch-contact-card.html"
      ]
    },
    "local": {
      "browsers": ["chrome"]
    }
  }
}