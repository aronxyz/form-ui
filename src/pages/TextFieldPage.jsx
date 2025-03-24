import React from 'react'
import TextField from '../components/TextField'
import { Eye, EyeOff, Mail } from 'lucide-react'

const TextFieldPage = () => {
    const [visibility, setVisibility] = React.useState(false);

    return (
        <section>
            <h1>Text Field</h1>

            <article>
                <div className='article-title'>
                    <h4>Base</h4>
                </div>
                <div className='article-body'>
                    <TextField type={"text"} id={"base"} name={"base"} label={"Base text field"} />
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Invalid</h4>
                </div>
                <div className='article-body'>
                    <TextField type={"text"} id={"invalid"} name={"invalid"} label={"Invalid text field"} withFeedback isInvalid />
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Text field with adorments</h4>
                </div>
                <div className='article-body'>
                    <TextField
                        type={"email"}
                        id={"with-start-adorment"}
                        name={"with-start-adorment"}
                        label={"Text field with start adorment"}
                        inputAdorment={{
                            startAdorment: {
                                content: <Mail />
                            }
                        }
                        }
                    />
                    <TextField
                        type={visibility ? "text" : "password"}
                        id={"with-action-adorment"}
                        name={"with-action-adorment"}
                        label={"Text field with action adorment"}
                        inputAdorment={{
                            endAdorment: {
                                content: visibility ? <Eye /> : <EyeOff />,
                                onClick: () => setVisibility(prev => !prev)
                            }
                        }}
                    />
                </div>
            </article>
        </section>
    )
}

export default TextFieldPage