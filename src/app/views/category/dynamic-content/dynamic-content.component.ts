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
import { ResourcesComponent } from "../resources/resources.component";

@Component({
  selector: "app-dynamic-content",
  templateUrl: "./dynamic-content.component.html",
  styleUrls: ["./dynamic-content.component.scss"]
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  @ViewChild("container", { static: true, read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() public type: string;
  private componentRef: ComponentRef<{}>;
  private mappings = {
    resourcesComponent: ResourcesComponent
  };

  @Input() context: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      this.componentRef = this.container.createComponent(factory);
      let instance = this.componentRef.instance as any;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type;
  }
}
