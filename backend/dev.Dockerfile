FROM node:18

COPY dev_backend_entrypoint.sh .

ENTRYPOINT ["./dev_backend_entrypoint.sh"]
