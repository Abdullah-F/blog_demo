FROM ruby:2.6.3-alpine

RUN apk update && apk upgrade && \
apk add ruby ruby-json ruby-io-console ruby-bundler ruby-irb ruby-bigdecimal tzdata && \
apk add nodejs && \
apk add curl-dev ruby-dev build-base libffi-dev && \
apk add build-base libxslt-dev libxml2-dev ruby-rdoc mysql-dev sqlite-dev

RUN gem install bundler

WORKDIR /blog_back_end/

COPY Gemfile Gemfile.lock /blog_back_end/

RUN bundle config build.nokogiri --use-system-libraries

RUN bundle install 

COPY . /blog_back_end/

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]