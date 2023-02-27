import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getFirestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(
    private _firestore: Firestore,
  ) { }
  sendMail(name: string, email: string, phone: string, message: string) {
    var ref = collection(getFirestore(), 'mail')
    return addDoc(ref, {
      to: 'rafael8721693@gmail.com',
      replyTo: email,
      message: {
        subject: 'Formulario CarDoctors',
        html: `
        <strong>Nombre:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone}<br><br>
        <strong>Mensaje:</strong> "${message}"
        `        
      },
    })
  }
}
