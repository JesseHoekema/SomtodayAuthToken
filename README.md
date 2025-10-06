## SomtodayAuthToken

**SomtodayAuthToken** is a minimal tool (bookmarklet + HTML helper) for extracting an authentication payload from Somtoday’s local storage and copying it to the clipboard in a compact delimited format


## How to use in your app

To begin tell the user how to install the bookmarklet (e.g drag the link that is blue to your bookmarkbar) Then in your app ask for the token by letting the user paste it in an input (or other thing).

The token that the bookmarklet gives u is not only the somtoday token but also the refresh token and the expire time. To separate them we used a **!**, A token looks like this:

```
AccessToken!Expires!RefreshToken
```

Create a script to get the items seperated and then use them


## How to use the token using the somtoday api?

For docs about the somtoday api please go here: https://github.com/elisaado/somtoday-api-docs
