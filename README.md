
## Start dev server with npm from container
```
docker run --rm -it --name documentation -v ${PWD}:/home/app -w /home/app -p 3000:3000 -u node node:lts /bin/bash
npm install
npm start -- --host 0.0.0.0
```
