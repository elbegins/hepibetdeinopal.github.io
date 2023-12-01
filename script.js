function explodeGift() {
  document.getElementById('giftBox').style.animation = 'explode 0.5s forwards';
  setTimeout(() => {
    document.getElementById('birthdayPerson').style.display = 'block';
  }, 500);
}
