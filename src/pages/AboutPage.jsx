import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>A React app to leave review for a product or service</p>
      <p>Version 1.0.0</p>

      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
