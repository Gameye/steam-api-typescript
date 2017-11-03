# automated tests
NEVER commit something that breaks the build! If you do, you suck. You can
easily prevent this by linking the `test.sh` script as a git `pre-push` or
`pre-commit` hook!

like this:
```bash
ln test.sh .git/hooks/pre-commit
```

If you use a git commit hook for testing, you may also bypass this hook with
the `--no-verify` or `-n` option of git commit, like this:
```bash
git commit -nm'some commit message'
```

# building the API
You can build a new API interface base upon the `steam-api.json` file by running
`npm run build-api`. This allows for easy upgrading the api from the JSON
description provided by steam via `https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/`.
