
install:
	npm install --prefix website

start:
	npm run start --prefix website

build-serve:
	npm run build --prefix website
	npm run serve --prefix website

docker:
	docker build . -t subo/docs
	docker run -p 8080:80 subo/docs

links:
	lychee --verbose --no-progress -t 5 --exclude-mail --exclude=local.suborbital.network website/docs/**/*.md

spellcheck:
	pyspelling -c .spellcheck.yml

