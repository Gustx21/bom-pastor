function abrirModalQRCode() {
  document.getElementById('modal-qrcode').style.display = 'flex';
  gerarQRCodePixFixo();
}

function fecharModalQRCode() {
  document.getElementById('modal-qrcode').style.display = 'none';
  document.getElementById('qrcode').innerHTML = '';
}

// Função para gerar QR Code Pix fixo
function gerarQRCodePixFixo() {
  try {
    const chave = "32.987.747/0001-71";
    const nome = "INSTITUTO BOM PASTOR"; // até 25 caracteres
    const cidade = "PIRAQUARA"; // até 15 caracteres
    const descricao = "Doação";
    
    // Payload Pix simples (exemplo básico)
    const payload =
      "000201" +
      "26360014br.gov.bcb.pix" +
      "0114" + chave.replace(/[^\d\w@.-]/g, '') +
      "52040000" +
      "5303986" +
      "5802BR" +
      `59${nome.length.toString().padStart(2, '0')}${nome}` +
      `60${cidade.length.toString().padStart(2, '0')}${cidade}` +
      "62070503***" +
      "6304";

    QRCode.toCanvas(document.getElementById('qrcode'), payload, {
      width: 256
    })
  } catch (error) {
    console.error(error);
  }
}