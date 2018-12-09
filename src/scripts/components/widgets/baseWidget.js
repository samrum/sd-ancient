import { h, Component } from "preact";

export default class CategoryWidget extends Component {
  render({ position, title, children, type, twoBorder }) {
    const widgetPosition = position || "left";
    const renderTwoBorders = twoBorder || false;
    const widgetClass = `widget ${type || ""}`;
    let widgetContentClass = "widget-content";

    if (renderTwoBorders) {
      widgetContentClass = `${widgetContentClass} twoBorder`;
    }

    let widgetContent = <div class={widgetContentClass}>{children}</div>;

    if (renderTwoBorders) {
      widgetContent = <div class="widgetContentWrapper">{widgetContent}</div>;
    }

    return (
      <div class={widgetClass}>
        <header class={widgetPosition}>{title}</header>
        {widgetContent}
        <footer class={widgetPosition} />
      </div>
    );
  }
}
