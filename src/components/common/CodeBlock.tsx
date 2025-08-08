import React from 'react';

interface CodeBlockProps {
  title?: string;
  language?: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, language = 'json', code }) => {
  return (
    <div className="card bg-neutral-50 overflow-hidden">
      {title && (
        <div className="px-4 py-2 text-xs uppercase tracking-wide text-primary-400 border-b border-neutral-200 bg-white">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code aria-label={language} className="font-mono text-primary-700">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
