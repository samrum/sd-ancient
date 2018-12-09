import { h } from "preact";
import LinkList from "./patterns/linkList";

export default function Footer() {
  const links = [
    {
      label: "About",
      url: "https://slickdeals.net/corp/about-us.html",
    },
    {
      label: "Contact",
      url: "https://twitter.com/slickdeals",
    },
    {
      label: "Privacy Policy",
      url: "https://slickdeals.net/corp/privacy-policy.html",
    },
    {
      label: "Terms of Use",
      url: "https://slickdeals.net/corp/terms-of-service.html",
    },
  ];

  const footerLinks = LinkList(links, " | ", "row");

  return <footer class="global-footer">{footerLinks}</footer>;
}
