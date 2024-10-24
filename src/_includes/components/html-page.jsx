import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { Header } from './header';
import { Footer } from './footer';
import { Metatags } from './metatags';
import { InlineStyle } from './inline-style';

export function HTMLPage({ children, isModel }) {
    const { title, eleventy, data, page } = useContext(EleventyContext);
    const { generator } = eleventy;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="generator" content={generator} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {isModel && <Metatags />}
                <link
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web&amp;display=swap"
                    rel="stylesheet"
                />
                <InlineStyle
                    styles={[
                        '../../css/vars.css',
                        '../../css/base.css',
                        '../../css/navbar.css',
                        '../../css/gallery.css',
                        '../../css/footer.css',
                    ]}
                />
                {isModel && (
                    <>
                        <script src="/js/photoswipe.js" defer />
                        <link href="/css/photoswipe.css" rel="stylesheet" />
                    </>
                )}
            </head>

            <body>
                <Header pageUrl={page.url} data={data} />
                <div className="content">
                    <h1>{title}</h1>
                    {children}
                </div>
                <Footer generator={generator} />
            </body>
        </html>
    );
}
