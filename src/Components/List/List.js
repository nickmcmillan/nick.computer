import React, { useRef } from 'react'
import ListItem from '../ListItem/ListItem'

const List = ({title, data, inert}) => {

  const ref = useRef()

  return (
    <section className="section" inert={inert ? '' : undefined}>
      <div className="sub-heading-wrapper" ref={ref}>
        <h2 className="sub-heading">
          {title}
        </h2>
      </div>

      <ul className="list">
        {data.map(item => (
          <ListItem
            key={item.href}
            href={item.href}
            title={item.title}
            desc={item.desc}
            Icon={item.Icon}
          />
        ))}
      </ul>
    </section>

  )
}

export default List
