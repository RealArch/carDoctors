import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailerService } from 'src/app/services/mailer/mailer.service';
import { PopupsService } from 'src/app/services/popups/popups.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  mailForm: FormGroup
  sendingMail: boolean = false
  constructor(
    private fb: FormBuilder,
    private apiMail: MailerService,
    private apiPopups:PopupsService
  ) { }

  ngOnInit() {
    this.mailForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]]

    })
  }
  sendMail(form: any) {
    this.sendingMail = true;
    this.apiMail.sendMail(form.name, form.email, form.phone, form.message)
      .then(() => {
        this.mailForm.reset()
        this.apiPopups.presentToastWithButtons('success','Message successfully sent.')
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.sendingMail = false
      })
  }


}
