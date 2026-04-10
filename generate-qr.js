const QRCode = require('qrcode');
const path = require('path');

const URL = 'https://caseyanthony.github.io/klactusqrclaudecode/';
const OUTPUT = path.join(__dirname, 'qrcode.png');

QRCode.toFile(OUTPUT, URL, {
  width: 1024,
  margin: 2,
  color: { dark: '#000000', light: '#ffffff' },
  errorCorrectionLevel: 'H'
}, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log(`QR code saved to ${OUTPUT}`);
  console.log(`Points to: ${URL}`);
});
