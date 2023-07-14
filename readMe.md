<h1 align = "center"> OAuth 2.0</h1>

## overveiw of OAuth:

OAuth 2.0 is an autheriazation framework which enables third party apps to obtain limited access to an HTTP service.

In traditional client-server authentication model, the client request an access-restricted resource (protected resource) on the server by authenticating with the server using the resource owner's credentials. In order to provide third-party applications access to restricted resources,the resource owner shares its credentials with the third party. This creates several problems and limitations.

OAuth addresses these issues by introducing an authorization layer and separating the role of the client from that of the resource owner.

Instead of using the resource owner's credentials to access protected resources, the client obtains an access token -- a string denoting a specific scope, lifetime, and other access attributes. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. The client uses the access token to access the protected resources hosted by the resource server.

### Example:

For example, an end-user (resource owner) can grant a printing service (client) access to her protected photos stored at a photo-sharing service (resource server), without sharing her username and password with the printing service. Instead, she authenticates directly with a server trusted by the photo-sharing service (authorization server), which issues the printing service delegation-specific credentials (access token).

## Roles In OAuth:

**resource owner :** An entity capable of granting access to a protected resource.
When the resource owner is a person, it is referred to as an
end-user.

**resource server :** The server hosting the protected resources, capable of accepting
and responding to protected resource requests using access tokens.

**Client :** An application making protected resource requests on behalf of the
resource owner and with its authorization. The term "client" does
not imply any particular implementation characteristics (e.g.,
whether the application executes on a server, a desktop, or other
devices).

**Authorization server :** The server issuing access tokens to the client after successfully
authenticating the resource owner and obtaining authorization.

The interaction between the authorization server and resource server
is beyond the scope of this specification. The authorization server
may be the same server as the resource server or a separate entity.
A single authorization server may issue access tokens accepted by
multiple resource servers.

## Protocol Flow:
 
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+



To Learn more about OAuth 2.0 [Click here](https://datatracker.ietf.org/doc/html/rfc6749)
