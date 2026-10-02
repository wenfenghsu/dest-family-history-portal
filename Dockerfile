FROM python:3.9.23-slim

# Metadata
LABEL org.opencontainers.image.authors="sam@gangyu.com.tw"

# Environment Variables
ENV PORT=8887
ENV WORKER=2
ENV WORKER_THREAD=8

# Set working directory
WORKDIR /usr/src/app

# Upgrade pip
RUN pip3 install --no-cache-dir --upgrade pip

# Copy requirements.txt
COPY requirements.txt requirements.txt

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Copy application files
COPY . .

CMD gunicorn -k gthread --thread=${WORKER_THREAD} -w ${WORKER} 'app:app' --bind=0.0.0.0:${PORT}