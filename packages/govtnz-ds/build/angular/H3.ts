import { Component, Input } from "@angular/core";
@Component({
  selector: "g-H3",
  template: `
<h3 class="{{constants.styleSize[styleSize] !== undefined ?  constants.styleSize[styleSize] : ""}}{{marginBottom8 ? " g-heading-mb-8" : ""}}{{marginBottom0 ? " g-heading-mb-0" : ""}}" id="{{id}}">

  <slot></slot>


</h3>


`
})
export class AppComponent {
  @Input() styleSize:
    | "xlarge"
    | "large"
    | "medium"
    | "small"
    | "xsmall"
    | "xxsmall";
  @Input() marginBottom8: boolean | undefined;
  @Input() marginBottom0: boolean | undefined;
  @Input() id: string | undefined;
  @Input() children: React.ReactNode;
  title = "H3";
}