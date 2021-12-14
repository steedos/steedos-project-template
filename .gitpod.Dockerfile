FROM gitpod/workspace-mongodb

# Install node
RUN nvm install v12.22.7

# Install Redis
RUN brew install redis