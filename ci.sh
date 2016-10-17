#!/bin/bash

export PATH="$HOME/.rbenv/bin:$PATH"; 
eval "$(rbenv init -)"

cd /home/jenkis/apps/natutea/dev.natutea.build/;
rbenv local 2.3.1
bundler install
bundler exec middleman build