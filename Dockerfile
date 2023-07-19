# Imagem Base
FROM postgres:latest

# Variáveis de ambiente
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB agenda

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432