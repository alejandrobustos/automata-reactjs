FROM node:6-slim

COPY ./.userid /.hostuserid
RUN useradd -u $(cat /.hostuserid) -ms /bin/bash dev
RUN chown -R dev:dev /home/dev
USER dev
ENV HOME /home/dev
ENV PATH "$PATH:/home/dev/.npm-global/bin"
WORKDIR /home/dev/app
RUN mkdir /home/dev/.npm-global && npm config set prefix '/home/dev/.npm-global'

ENTRYPOINT bash