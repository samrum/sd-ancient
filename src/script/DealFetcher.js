export default class DealFetcher {
    static getDealsViaYahoo() {
        const dealRssFeed = 'https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&searchin=first&rss=1';
        const yahooQuery = `select * from rss where url = '${dealRssFeed}'`;
        const queryEncoded = encodeURIComponent(yahooQuery);
        const yahooUrl = `https://query.yahooapis.com/v1/public/yql?q=${queryEncoded}&format=xml&callback=dealFetchCallback`;

        return new Promise((resolve) => {
            window.dealFetchCallback = resolve;

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = yahooUrl;
            script.id = 'test';

            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }

    static getDeals() {
        return new Promise((resolve) => {
            DealFetcher.fetchDeals()
                .then((deals) => {
                    const groupedDeals = {};

                    deals.slice(0, 20).forEach((deal) => {
                        const group = groupedDeals[deal.postDate];

                        if (group) {
                            group.push(deal);
                        }
                        else {
                            groupedDeals[deal.postDate] = [deal];
                        }
                    });

                    resolve(groupedDeals);
                });
        });
    }

    static fetchDeals() {
        return new Promise((resolve, reject) => {
            DealFetcher.getDealsViaYahoo()
                .then((data) => {
                    const deals = DealFetcher.parseDeals(data);
                    resolve(deals);
                })
                .catch(error => reject(error));
        });
    }

    static parseDeals(data) {
        return data.results.map((item, idx) => DealFetcher.parseItem(item, idx));
    }

    static parseItem(item, index) {
        const parser = new DOMParser();
        const elm = parser.parseFromString(item, 'text/xml');

        return {
            id: index,
            threadId: DealFetcher.parseThreadId(elm),
            title: DealFetcher.parseTitle(elm),
            postDate: DealFetcher.parsePostDate(elm),
            link: elm.querySelector('link').innerHTML,
            description: elm.querySelector('description').innerHTML,
            text: DealFetcher.parseDealText(elm),
        };
    }

    static parseTitle(elm) {
        const rx = /CDATA\[(.*?)\]/g;
        const title = elm.querySelector('title').innerHTML;
        const formattedTitle = rx.exec(title);

        return formattedTitle ? formattedTitle[1] : title;
    }

    static parseThreadId(elm) {
        const dealUrl = elm.querySelector('link').innerHTML;

        const rx = /\/f\/([0-9]*)/g;
        const threadId = rx.exec(dealUrl);

        return threadId[1];
    }

    static parsePostDate(elm) {
        const postDate = elm.querySelector('pubDate').innerHTML;
        const postDateObj = new Date(postDate);

        let month = postDateObj.getMonth() + 1;
        month = month < 10 ? month : `0${month}`;

        return `${month}/${postDateObj.getDate()}/${postDateObj.getFullYear() % 1000}`;
    }

    static parseDealText(elm) {
        const text = elm.querySelector('item').getElementsByTagNameNS('*', 'encoded')[0];

        const template = document.createElement('template');
        template.innerHTML = text.innerHTML.substring(9, text.innerHTML.length - 4);
        const encodedElements = template.content.childNodes;
        let dealText = encodedElements[encodedElements.length - 1].innerHTML;
        dealText = dealText.replace(/\[LIST\]/g, '');
        dealText = dealText.replace(/\[\*\]/g, '<br>');

        return dealText;
    }
}
