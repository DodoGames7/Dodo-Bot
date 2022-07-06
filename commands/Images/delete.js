module.exports = {
  name: "delete",
  code: `$attachment[https://api.miduwu.ga/image/delete?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];deleted.png]`
}
