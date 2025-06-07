# HTTP (continued)

## Finding the right server

There are lots of computers on the Internet, and they all have addresses like "10.17.41.200" or "10.177.31.12". Which one should your web browser contact, to ask for the cat picture?

To find out, it sends out a _DNS request_, asking for the address of the "host" part of the URL: `hyf.example.net`.

![slide](../../i/i.015.png)

Something (typically, your Interner router) then replies with the answer:

![slide](../../i/i.016.png)

For example, it's 10.177.31.12.

The system that handles this is called DNS: the Domain Name System.

So, now your web browser knows which computer it needs to contact in order to be able to ask for the cat picture.

Next, it needs to _connect_ to that server.

Continue to [Establishing a connection](./3-tcp.md)
