import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Base64Service } from '../base64.service';

export interface SetupFormValues {
  peertubeLiveLink: string;
  ircServerHost: string;
  ircChannelName: string;
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  @ViewChild('output', { static: true }) outputRef: ElementRef<HTMLInputElement>;

  setupForm = new FormGroup({
    peertubeLiveLink: new FormControl('', Validators.required),
    ircServerHost: new FormControl('', Validators.required),
    ircChannelName: new FormControl('', Validators.required)
  })

  constructor(
    private base64Service: Base64Service
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.outputRef.nativeElement.value = this.constructLink(this.setupForm.value);
  }

  copy() {
    this.outputRef.nativeElement.select();
    this.outputRef.nativeElement.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  private constructLink(formValues: SetupFormValues): string {
    return `${environment.baseUrl}/watch/${this.base64Service.encode(formValues.peertubeLiveLink)}/${this.base64Service.encode(formValues.ircServerHost)}/${this.base64Service.encode(formValues.ircChannelName)}`;
  }

}
