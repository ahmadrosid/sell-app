import dynamic from 'next/dynamic'
import fonts from '../common/fonts'
const DynamicEditor = dynamic(() => import('../components/editor'), {
  ssr: false,
})

export default function Index() {
  return <div style={{
    width: 1024,
    margin: '0 auto',
    padding: '1em',
    height: '100vh',
    fontFamily: fonts.base
  }}>
    <DynamicEditor />
  </div>
}