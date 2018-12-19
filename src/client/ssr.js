import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './App';
import './index.css';

//요청에서 url을 받아옴
const render = (ctx) => {
    const { url } = ctx;

// renderToString-> 렌더링된 결과물을 문자열로 만듬
const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
        <App />
    </StaticRouter>
);

return html;

}

export default render;