import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Input,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";

import { DYNAMIC_CONTENT_KEYS } from "./dynamic-content-keys.data";

@Component({
  selector: "app-dynamic-content",
  templateUrl: "./dynamic-content.component.html",
  styleUrls: ["./dynamic-content.component.scss"]
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild("container", { static: true, read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() public type: string;
  @Input() public context: any;
  private componentRef: ComponentRef<{}>;
  private mappings = DYNAMIC_CONTENT_KEYS;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      this.componentRef = this.container.createComponent(factory);
      this.updateInputs(this.componentRef.instance);
    }
  }

  public updateInputs(instance): any {
    const keys = Object.keys(this.context);
    instance.context = this.context;

    for (const key of keys) {
      instance[key] = this.context[key];
    }
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private getComponentType(typeName: string): any {
    const type = this.mappings[typeName];
    return type;
  }
}
