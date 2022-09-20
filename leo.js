//import javax.swing.*;
//
//public class pythagoras{
//	public static void main (String[] arg) {
//	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
//	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
//	double c = Math.sqrt(a*a + b*b);
//	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
//	}
//}

const asida = document.querySelector('#input-field');
const bsida = document.querySelector('#input-field1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const a = asida.value;
    const b = bsida.value;
    const c = Math.sqrt(a*a + b*b);
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');

    message.textContent = `Hypotenusan är${c} cm lång`;
    messageBox.appendChild(message);
});