import { Category } from "../category.model";
import { Topic } from "../topic.model";
import { Tab } from "../tab.model";
import { TabContainer } from "../tab-container.model";

export const JAVASCRIPT_DATA: Category = new Category({
  id: "javascript",
  title: "Javascript",
  description:
    "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
  topics: [
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" }),
    new Topic({ id: "boolean", label: "Boolean" })
  ],
  tabContainers: [
    new TabContainer({
      title: "Example",
      tabItems: [
        new Tab({ label: "Simple", iconClasses: "fas fa-cog" }),
        new Tab({ label: "Advanced", iconClasses: "fas fa-cogs" })
      ]
    })
  ],

  iconClasses: ""
});
