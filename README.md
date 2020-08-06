## how to start git
- initialize project
```bash
git init
```
- add .gitignore file


- git login on the device
```
git config --global user.name "yiran1201"
git config --global user.email "yiranchen1201@gmail.com"
```

- connect to remote git repo 
```
git remote add origin https://github.com/yiran1201/omicron.git
```

-  check remote connection
```
git remote
```

## Commit 3 cycles
- Check git status
```
git status
```

- Add all changed file
```
git add -A
```

- Add commit message 
```
git commit -m "..."
```

- Push to repo
```
git push origin master
```