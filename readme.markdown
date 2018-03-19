steam-api cli and typescript bindings

# automated tests
NEVER commit something that breaks the build!You can
easily prevent this by linking the `test.sh` script as a git `pre-commit` hook!

like this:
```bash
ln test.sh .git/hooks/pre-commit
```

# building the API
You can build a new API interface base upon the `steam-api.json` file by running
`npm run build-api`. This allows for easy upgrading the api from the JSON
description provided by steam via `https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/`.
