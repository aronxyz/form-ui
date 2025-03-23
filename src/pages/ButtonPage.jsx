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
                    <h4>Button with icons</h4>
                </div>
                <div className='article-body'>
                    <Button accent startIcon={<HandHeart />}>Button</Button>
                    <Button accent endIcon={<HandHeart />}>Button</Button>
                </div>
            </article>

            <article>
                <div className='article-title'>
                    <h4>Icon Button</h4>
                </div>
                <div className='article-body'>
                    <IconButton><HandHeart /></IconButton>
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
                    <h4>Disabled</h4>
                </div>
                <div className='article-body'>
                    <Button disabled>Button</Button>
                </div>
            </article>

        </section>
    )
}

export default ButtonPage