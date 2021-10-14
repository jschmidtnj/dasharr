#!/bin/bash

ip_address="34.139.205.36"

openssl genrsa -out server.key 2048

openssl req -new -sha256 -key server.key \
    -subj "/C=XX/ST=DEFAULT/L=DEFAULT/O=DEFAULT/CN=server.com" \
    -reqexts SAN \
    -config <(cat my-openssl.cnf <(printf "\n[SAN]\nsubjectAltName=DNS:localhost,IP:$ip_address,DNS:dns.server.com")) \
    -out server.csr

openssl x509 -req -days 365 \
	-in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial \
	-extfile <(printf "subjectAltName=DNS:localhost,IP:$ip_address,DNS:dns.server.com") \
	-out server.crt


