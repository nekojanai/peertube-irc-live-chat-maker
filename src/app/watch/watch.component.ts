import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Base64Service } from '../base64.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  peertubeLiveLink: SafeResourceUrl;
  kiwiIrcLink: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private base64Service: Base64Service,
    public sanitizer: DomSanitizer
  ) {
    this.peertubeLiveLink = this.sanitizeURL(`${this.base64Service.decode(this.route.snapshot.paramMap.get('pturl')).replace('watch', 'embed')}?warningTitle=0`)
    this.kiwiIrcLink = this.sanitizeURL(`https://kiwiirc.com/client/${this.base64Service.decode(this.route.snapshot.paramMap.get('ircurl'))}/#${this.base64Service.decode(this.route.snapshot.paramMap.get('channelname'))}`);
  }

  sanitizeURL(s: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(s);
  }

  ngOnInit(): void {
  }

}
