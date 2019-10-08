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

  @Input() public context: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        componentType
      );
      this.componentRef = this.container.createComponent(factory);
      const keys = Object.keys(this.context);
      const instance = (this.componentRef as any).instance;
      instance.context = this.context;
      console.log(instance.context);

      for (const key of keys) {
        instance[key] = this.context[key];
      }
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
