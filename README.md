# dasharr

- dashboard for readarr / sonarr
- using https://github.com/mdbootstrap/mdb-ui-kit
- and https://github.com/fatedier/frp

## install frp

- `wget https://github.com/fatedier/frp/releases/download/v0.37.1/frp_0.37.1_linux_amd64.tar.gz`
- `tar -xvzf *.tar.gz`
- `sudo apt-get install build-essential`
- `cd frp*`
- `make`

## ports to allow ingress / egress

80,443,2020,2121,3389,5001-5005,6000,7000,7500

## rdp

for rdp connection, use remmina, connect to direct.jframe.work

better performance: https://askubuntu.com/a/1283785

## pwa

Use [development mode on cloudflare](https://developers.cloudflare.com/cache/reference/development-mode) to prevent caching issues. See [this](https://developers.google.com/web/fundamentals/primers/service-workers#install_a_service_worker) for info about setting up pwa's.

## cost

hosting is free on gcp using an e2-micro machine. data egress costs $0.108 / hour, streaming at 2Mbps ($0.12 / gb, ~900mb / hr). 40 hours is $4.32.

use bmon to view network usage

## other links

- https://1lib.us
- http://libgen.li
- https://sci-hub.se/lang/en

