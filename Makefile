ESLINT=./node_modules/.bin/eslint
REACT_SCRIPTS=./node_modules/.bin/react-scripts

lint:
	$(ESLINT) *.js
	$(ESLINT) src/*.js

react_tests:
	$(REACT_SCRIPTS) test --env=jsdom

test: lint react_tests

start:
	$(REACT_SCRIPTS) start

install:
	npm install

.PHONY: install server test
