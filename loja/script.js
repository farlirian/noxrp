function comprar(produto) {
  fetch('comprar.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'produto=' + encodeURIComponent(produto)
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'sucesso') {
      document.getElementById('qrCode').innerHTML = '<img src="data:image/png;base64,' + data.qrimg + '"><p>Escaneie o QR Code para pagar</p>';
    } else {
      alert(data.mensagem);
    }
  });
}