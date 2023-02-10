/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useRef} from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/shadesOfPurple'

type Props = {
  code: string
  language: Language
}

const CodeBlock: React.FC<Props> = ({code, language}) => {
  const codeRef = useRef<HTMLDivElement | null>(null)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) {
      return
    }

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [copied])

  useEffect(() => {
    if (!codeRef.current) {
      return
    }

    const prismCodeElement = codeRef.current.querySelector('.prism-code ') as HTMLDivElement
    if (prismCodeElement) {
      prismCodeElement.style.background = 'none'
      prismCodeElement.style.fontSize = '13px'
    }
  }, [])

  return (
    <div className='py-5'>
      <div className='highlight'>
     
          

        <div className='highlight-code' ref={codeRef}>
          <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({className, style, tokens, getLineProps, getTokenProps}) => {
              return (
                <pre className={className} style={{maxHeight: '300px', ...style}}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({token, key})} />
                      ))}
                    </div>
                  ))}
                </pre>
              )
            }}
          </Highlight>
        </div>
      </div>
    </div>
  )
}

export {CodeBlock}