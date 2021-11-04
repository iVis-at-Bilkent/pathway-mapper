FROM ubuntu:20.04

ENV TZ Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install Dependency
RUN apt-get clean && \
    apt-get update --fix-missing && \
    apt-get install -y --fix-missing curl git gnupg2 tzdata

# Install YARN
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt update && apt-get -y --fix-missing install yarn

# Install PathwayMapper
RUN git clone https://github.com/iVis-at-Bilkent/pathway-mapper.git && \
    cd pathway-mapper && \
    yarn install

ENV PORT 3000
WORKDIR /pathway-mapper
RUN yarn build
ENTRYPOINT yarn start
