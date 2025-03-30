import React from 'react'
import RSelect from '../components/RSelect'
import TagsSelect from '../components/TagsSelect'

const SelectPage = () => {
  return (
    <section>
      <h1>Select</h1>

      <article>
        <div className='article-title'>
          <h4>Base</h4>
        </div>
        <div className='article-body'>
          <RSelect label={"Base select"} id={"base"} />
        </div>
      </article>

      <article>
        <div className='article-title'>
          <h4>Invalid</h4>
        </div>
        <div className='article-body'>
          <RSelect
            label={"Invalid select"}
            id={"invalid-select"}
            withFeedback
            isInvalid
          />
        </div>
      </article>
      
      <article>
        <div className='article-title'>
          <h4>Disabled</h4>
        </div>
        <div className='article-body'>
          <RSelect
            label={"Invalid select"}
            id={"invalid-select"}
            disabled
          />
        </div>
      </article>

      <article>
        <div className='article-title'>
          <h4>Tags Select</h4>
        </div>
        <div className='article-body'>
          <TagsSelect label={"Tags select"} id={"tags-select"} />
        </div>
      </article>

    </section>
  )
}

export default SelectPage