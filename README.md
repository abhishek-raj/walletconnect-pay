# walletconnect-pay

WalletConnect Pay - Ethereum POS System with WalletConnect support

# For deploying to Heroku

```
git clone https://github.com/abhishek-raj/walletconnect-pay.git
cd walletconnect-pay
```

From the heroku copy Existing Git repository command under the Deploy tab(For example):
```
heroku git:remote -a walletconnect-test
git push -u heroku master
```

PS: Git and Heroku is required to be installed on system.  
Important: This project uses git submodules and Heroku does not work with Github Projects with submodules. See here: https://devcenter.heroku.com/articles/github-integration#does-github-integration-work-with-git-submodules 