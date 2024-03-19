FROM nodered/node-red
COPY settings.js node_modules/node-red/settings.js
COPY package.json .
USER root
RUN apk add --no-cache inotify-tools
COPY ssh-sidecar/ssh-manage.sh /tmp
RUN chmod a+rwx /tmp/ssh-manage.sh
COPY ssh-sidecar/ssh-key-watch.sh /tmp
RUN chmod a+rwx /tmp/ssh-key-watch.sh
RUN chgrp 0 node_modules/node-red/settings.js && \
mkdir /data/.ssh && \
chgrp -R 0 /data && \
chmod -R g+rwX /data
USER 1001