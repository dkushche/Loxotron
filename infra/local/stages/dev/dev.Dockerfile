FROM node:18

COPY dev_entrypoint.sh .

ENTRYPOINT ["./dev_entrypoint.sh"]
