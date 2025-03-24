import { HandHeart } from 'lucide-react'
import React from 'react'
import Spinner from '../components/Spinner'
import Button from '../components/Button'
import IconButton from '../components/IconButton'

const ButtonPage = () => {
    return (
        <section>
            
            <h1 className='section-title'>Button</h1>

            <article>
                <div className='article-title'>
                    <h4>Base</h4>
                </div>
                <div className='article-body'>
                    <Button>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Accent</h4>
                </div>
                <div className='article-body'>
                    <Button accent>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Danger</h4>
                </div>
                <div className='article-body'>
                    <Button danger>Button</Button>
                    <Button accent danger>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Button with icons</h4>
                </div>
                <div className='article-body'>
                    <Button startIcon={<HandHeart />}>Button</Button>
                    <Button accent endIcon={<HandHeart />}>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Disabled</h4>
                </div>
                <div className='article-body'>
                    <Button disabled>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Loading</h4>
                </div>
                <div className='article-body'>
                    <Button loading>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>IconButton</h4>
                </div>
                <div className='article-body'>
                    <IconButton><HandHeart /></IconButton>
                    <IconButton ghost><HandHeart /></IconButton>
                    <IconButton danger><HandHeart /></IconButton>
                    <IconButton ghost danger><HandHeart /></IconButton>
                    <IconButton disabled><HandHeart /></IconButton>
                    <IconButton ghost disabled><HandHeart /></IconButton>
                </div>
            </article>

        </section>
    )
}

export default ButtonPage