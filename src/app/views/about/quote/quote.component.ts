import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"]
})
export class QuoteComponent {
  public quote: string =
    "PJ Dev Docs goal is to make developer documentation pain free and include more than just text regardless of your coding level ";

  public author = "Paul Jukman";
  public occupation = "Developer";
}
