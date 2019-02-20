import Link from 'next/link'
import data from '../static/poems/poems.json'

const linkStyle = {
  marginRight: 15
}

const Book = () => (
<div>
     <ul>
  {data.map(({id,poem, title}) => (
    <li>
      <Link as={`/p/${id}`} href={`/poems?id=${id}`}>
        <a>{title}</a>
      </Link>
    </li>	
  ))}
  </ul>
</div>
)

export default Book