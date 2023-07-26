import { Remarkable } from 'remarkable';

const md = new Remarkable({
    breaks: true
});

export default function MarkdownPreview({ markdown }) {
  const renderedHTML = md.render(markdown);
  return <div id="preview" dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}
