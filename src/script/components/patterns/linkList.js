import { h } from 'preact';

export default function linkList(links, linkDelimiter, direction) {
    const delimiter = linkDelimiter || ' | ';
    const listDirection = direction || 'row';

    const listClass = `linkList ${listDirection}`;

    const linkElements = links.map((link) => {
        const imageElm = link.image ? <img src={link.image} /> : null;
        const props = {};

        if (link.openInNewTab) {
            props.target = '_blank';
        }

        return (
            <li>
                <a href={link.url} {...props}>
                    { imageElm } {link.label}
                </a>
            </li>
        );
    }).reduce((prev, curr) => [prev, delimiter, curr]);

    return (
        <ul class={listClass}>
            { linkElements }
        </ul>
    );
}
